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

it('respeita Global Privacy Control mesmo no Brasil', async () => {
  vi.stubGlobal('navigator', { globalPrivacyControl: true });
  const { startMetaPixel } = await import('../lib/meta-pixel');
  const stop = startMetaPixel();
  await new Promise(resolve => setTimeout(resolve, 0));
  expect(window.fbq).toBeUndefined();
  stop();
});