import { afterEach, beforeEach, expect, it, vi } from 'vitest';

beforeEach(() => {
  vi.resetModules();
  localStorage.clear();
  delete window.fbq;
  delete window._fbq;
  // jsdom lacks the browser's AbortSignal.timeout implementation.
  vi.stubGlobal('AbortSignal', { timeout: () => undefined });
});
afterEach(() => {
  vi.unstubAllGlobals();
  document.querySelectorAll('script[src*="fbevents.js"]').forEach(script => script.remove());
});

async function start(country: string) {
  vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true, text: async () => `h=${location.hostname}\nloc=${country}` }));
  const { startMetaPixel } = await import('../lib/meta-pixel');
  const stop = startMetaPixel();
  await vi.waitFor(() => expect(fetch).toHaveBeenCalled());
  await new Promise(resolve => setTimeout(resolve, 0));
  return stop;
}

it('instala somente o novo pixel e envia uma PageView quando permitido no Brasil', async () => {
  const stop = await start('BR');
  expect(window.fbq?.queue).toContainEqual(['init', '2150691958883963', {}, { agent: 'lovable' }]);
  expect(window.fbq?.queue.filter(args => args[0] === 'track')).toEqual([['track', 'PageView']]);
  const { saveChoices } = await import('../lib/consent');
  saveChoices({ advertising: 'denied' });
  await vi.waitFor(() => expect(window.fbq?.queue).toContainEqual(['consent', 'revoke']));
  stop();
});

it.each(['GB', 'CA', 'XX'])('não carrega o pixel sem autorização em %s', async country => {
  const stop = await start(country);
  expect(window.fbq).toBeUndefined();
  stop();
});

it('autorizar análise não autoriza publicidade no Reino Unido', async () => {
  const stop = await start('GB');
  const { saveChoices, canTrack } = await import('../lib/consent');
  saveChoices({ analytics: 'granted' });
  expect(await canTrack('analytics')).toBe(true);
  expect(await canTrack('advertising')).toBe(false);
  expect(window.fbq).toBeUndefined();
  stop();
});

it('aceitação explícita libera o novo pixel no Canadá e retirada revoga sem repetir PageView', async () => {
  const stop = await start('CA');
  const { saveChoices, needsAnswer } = await import('../lib/consent');
  expect(await needsAnswer(['analytics', 'advertising'])).toBe(true);
  saveChoices({ analytics: 'denied', advertising: 'granted' });
  await vi.waitFor(() => expect(window.fbq?.queue).toContainEqual(['track', 'PageView']));
  expect(await needsAnswer(['analytics', 'advertising'])).toBe(false);
  saveChoices({ advertising: 'denied' });
  await vi.waitFor(() => expect(window.fbq?.queue).toContainEqual(['consent', 'revoke']));
  saveChoices({ advertising: 'granted' });
  await new Promise(resolve => setTimeout(resolve, 0));
  expect(window.fbq?.queue.filter(args => args[0] === 'track')).toEqual([['track', 'PageView']]);
  stop();
});

it('recusa em outra aba revoga publicidade no Brasil', async () => {
  const stop = await start('BR');
  localStorage.setItem('cookie_consent_advertising', JSON.stringify({ choice: 'denied', at: Date.now() }));
  window.dispatchEvent(new StorageEvent('storage', { key: 'cookie_consent_advertising' }));
  await vi.waitFor(() => expect(window.fbq?.queue).toContainEqual(['consent', 'revoke']));
  stop();
});

it('respeita Global Privacy Control mesmo no Brasil', async () => {
  vi.stubGlobal('navigator', { globalPrivacyControl: true });
  const { startMetaPixel } = await import('../lib/meta-pixel');
  const stop = startMetaPixel();
  await new Promise(resolve => setTimeout(resolve, 0));
  expect(window.fbq).toBeUndefined();
  stop();
});