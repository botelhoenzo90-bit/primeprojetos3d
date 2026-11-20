import { cleanup, render } from '@testing-library/react';
import { afterEach, expect, it, vi } from 'vitest';
import SalesNotification from '../components/SalesNotification';

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

it('espaça as notificações em 13 segundos, dois a mais que os 11 anteriores', () => {
  const interval = vi.spyOn(window, 'setInterval');
  render(<SalesNotification />);
  expect(interval).toHaveBeenCalledWith(expect.any(Function), 13000);
});