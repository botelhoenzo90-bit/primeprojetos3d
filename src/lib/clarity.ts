import { canTrack, onConsentChange } from './consent';

export const CLARITY_ID = 'zjwbt40fqf';
type Clarity = ((...args: unknown[]) => void) & { q?: unknown[][] };
declare global { interface Window { clarity?: Clarity } }

/** Clarity records sessions with cookies, so it only loads after analytics permission. */
export function startClarity() {
  let active = true;
  let loaded = false;
  const update = async () => {
    const permitted = await canTrack('analytics');
    if (!active) return;
    if (!permitted) { window.clarity?.('consent', false); return; }
    if (!loaded) {
      const c = (window.clarity ||= Object.assign((...args: unknown[]) => { (c.q ||= []).push(args); }, {}) as Clarity);
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
      document.head.appendChild(script);
      loaded = true;
    }
    window.clarity?.('consent');
  };
  const unsubscribe = onConsentChange(() => { void update(); });
  void update();
  return () => { active = false; unsubscribe(); };
}
