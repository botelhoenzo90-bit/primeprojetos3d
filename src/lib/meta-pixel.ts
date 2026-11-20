import { canTrack, onConsentChange } from './consent';

export const META_PIXEL_ID = '2150691958883963';
type Pixel = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push: Pixel;
  loaded: boolean;
  version: string;
};
declare global {
  interface Window { fbq?: Pixel; _fbq?: Pixel; }
}

let initialized = false;
let pageViewSent = false;

export function startMetaPixel() {
  let active = true;
  const update = async () => {
    const permitted = await canTrack('advertising');
    if (!active) return;
    if (!permitted) {
      window.fbq?.('consent', 'revoke');
      return;
    }
    if (!window.fbq) {
      const pixel = ((...args: unknown[]) => {
        if (pixel.callMethod) pixel.callMethod.apply(pixel, args);
        else pixel.queue.push(args);
      }) as Pixel;
      pixel.queue = [];
      pixel.push = pixel;
      pixel.loaded = true;
      pixel.version = '2.0';
      window.fbq = pixel;
      window._fbq = pixel;
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      document.head.appendChild(script);
    }
    window.fbq('consent', 'grant');
    if (!initialized) {
      window.fbq('init', META_PIXEL_ID, {}, { agent: 'lovable' });
      initialized = true;
    }
    if (!pageViewSent) {
      window.fbq('track', 'PageView');
      pageViewSent = true;
    }
  };
  const unsubscribe = onConsentChange(() => { void update(); });
  void update();
  return () => { active = false; unsubscribe(); };
}