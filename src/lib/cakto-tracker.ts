import { canTrack, onConsentChange } from './consent';

type TrackerWindow = Window & { caktoTracker?: { decorate: (href: string) => string } };

/** Isolate the vendor's non-revocable listeners so withdrawing permission stops them immediately. */
export function startCaktoTracker() {
  let active = true;
  let revision = 0;
  let frame: HTMLIFrameElement | undefined;
  const originals = new Map<HTMLAnchorElement, string>();
  const decorate = (link: HTMLAnchorElement) => {
    const tracker = (frame?.contentWindow as TrackerWindow | null)?.caktoTracker;
    if (!tracker) return;
    const previous = link.href;
    const next = tracker.decorate(previous);
    if (next === previous) return;
    if (!originals.has(link)) originals.set(link, previous);
    link.href = next;
  };
  const decorateAll = () => document.querySelectorAll<HTMLAnchorElement>('a[href]').forEach(decorate);
  const observer = new MutationObserver(decorateAll);
  const click = (event: MouseEvent) => {
    const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href]') : null;
    if (link) decorate(link);
  };
  const unload = () => {
    observer.disconnect();
    document.removeEventListener('click', click, true);
    frame?.remove();
    frame = undefined;
    originals.forEach((href, link) => { link.href = href; });
    originals.clear();
    try {
      localStorage.removeItem('cakto_trk');
      localStorage.removeItem('cakto_vid');
    } catch { /* Storage may be unavailable. */ }
  };
  const update = async () => {
    const current = ++revision;
    const allowed = await canTrack('advertising');
    if (!active || current !== revision) return;
    if (!allowed) { unload(); return; }
    if (frame) return;
    frame = document.createElement('iframe');
    frame.hidden = true;
    frame.title = 'Rastreamento de campanhas Cakto';
    frame.setAttribute('aria-hidden', 'true');
    frame.src = `/cakto-tracker.html${window.location.search}`;
    frame.onload = () => {
      decorateAll();
      observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['href'] });
      document.addEventListener('click', click, true);
    };
    document.body.appendChild(frame);
  };
  const unsubscribe = onConsentChange(() => { void update(); });
  void update();
  return () => { active = false; revision++; unsubscribe(); unload(); };
}