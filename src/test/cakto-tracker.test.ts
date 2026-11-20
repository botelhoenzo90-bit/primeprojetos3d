import { afterEach, beforeEach, expect, it, vi } from 'vitest';

let stop: (() => void) | undefined;
beforeEach(() => {
  vi.resetModules();
  localStorage.clear();
  vi.stubGlobal('AbortSignal', { timeout: () => undefined });
  vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true, text: async () => `h=${location.hostname}\nloc=GB` }));
});
afterEach(() => { stop?.(); stop = undefined; vi.unstubAllGlobals(); document.body.innerHTML = ''; });

it('does not load Cakto when only analytics is accepted', async () => {
  const { saveChoices } = await import('../lib/consent');
  saveChoices({ analytics: 'granted' });
  stop = (await import('../lib/cakto-tracker')).startCaktoTracker();
  await new Promise(resolve => setTimeout(resolve, 0));
  expect(document.querySelector('iframe')).toBeNull();
});

it('loads on advertising acceptance and removes campaign storage and links on withdrawal', async () => {
  const { saveChoices } = await import('../lib/consent');
  saveChoices({ advertising: 'granted' });
  stop = (await import('../lib/cakto-tracker')).startCaktoTracker();
  await vi.waitFor(() => expect(document.querySelector('iframe')).not.toBeNull());
  const frame = document.querySelector('iframe');
  if (!frame?.contentWindow) throw new Error('Missing tracking frame');
  Object.assign(frame.contentWindow, { caktoTracker: { decorate: (href: string) => href.includes('utm_source') ? href : `${href}?utm_source=campaign_test` } });
  document.body.insertAdjacentHTML('beforeend', '<a href="https://pay.cakto.com.br/vfa8ugj_1323876">Checkout</a>');
  frame.dispatchEvent(new Event('load'));
  expect(document.querySelector('a')?.href).toBe('https://pay.cakto.com.br/vfa8ugj_1323876?utm_source=campaign_test');
  localStorage.setItem('cakto_trk', 'test');
  localStorage.setItem('cakto_vid', 'test');
  saveChoices({ advertising: 'denied' });
  await vi.waitFor(() => expect(document.querySelector('iframe')).toBeNull());
  expect(document.querySelector('a')?.href).toBe('https://pay.cakto.com.br/vfa8ugj_1323876');
  expect(localStorage.getItem('cakto_trk')).toBeNull();
  expect(localStorage.getItem('cakto_vid')).toBeNull();
});

it('blocks Cakto with Global Privacy Control despite saved acceptance', async () => {
  vi.stubGlobal('navigator', { globalPrivacyControl: true });
  localStorage.setItem('cookie_consent_advertising', JSON.stringify({ choice: 'granted', at: Date.now() }));
  stop = (await import('../lib/cakto-tracker')).startCaktoTracker();
  await new Promise(resolve => setTimeout(resolve, 0));
  expect(document.querySelector('iframe')).toBeNull();
});