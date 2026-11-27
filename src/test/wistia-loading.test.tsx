import { act, cleanup, render } from '@testing-library/react';
import { afterEach, expect, it, vi } from 'vitest';
import WistiaVideo from '../components/WistiaVideo';

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  document.querySelectorAll('script[src*="wistia.com"]').forEach(script => script.remove());
});

it('não solicita o SDK fora da tela e carrega uma só cópia quando o vídeo se aproxima', () => {
  let notify: IntersectionObserverCallback | undefined;
  const disconnect = vi.fn();
  vi.stubGlobal('IntersectionObserver', class {
    constructor(callback: IntersectionObserverCallback) { notify = callback; }
    observe() {}
    disconnect = disconnect;
  });
  const { rerender } = render(<WistiaVideo mediaId="m2f6qcvqu7" aspect={1.8823529411764706} />);
  expect(document.querySelector('script[src="https://fast.wistia.com/player.js"]')).toBeNull();
  const callback = notify;
  if (!callback) throw new Error('Missing visibility callback');
  act(() => callback([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver));
  rerender(<WistiaVideo mediaId="m2f6qcvqu7" aspect={1.8823529411764706} />);
  expect(document.querySelectorAll('script[src="https://fast.wistia.com/player.js"]')).toHaveLength(1);
  expect(document.querySelector('wistia-player')?.getAttribute('media-id')).toBe('m2f6qcvqu7');
  expect(disconnect).toHaveBeenCalled();
});