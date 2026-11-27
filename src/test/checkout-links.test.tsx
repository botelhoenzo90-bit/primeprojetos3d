import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import OfferSection from '../components/OfferSection';

vi.mock('framer-motion', () => ({
  motion: { div: 'div', h2: 'h2' },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
}));

afterEach(() => {
  cleanup();
  history.replaceState(null, '', '/');
  localStorage.clear();
  delete window.fbq;
});

describe('Destinos de pagamento', () => {
  it('encaminha o Premium ao checkout informado', () => {
    render(<OfferSection />);
    expect(screen.getByRole('link', { name: /QUERO O PREMIUM COMPLETO/i })).toHaveAttribute('href', 'https://pay.cakto.com.br/vfa8ugj_1323876');
  });

  it('mantém o checkout Básico na continuação do popup', () => {
    render(<OfferSection />);
    fireEvent.click(screen.getByRole('button', { name: /ESCOLHER PACOTE BÁSICO/i }));
    expect(screen.getByRole('link', { name: /Continuar com o Básico/i })).toHaveAttribute('href', 'https://pay.cakto.com.br/buf4wp3_1350697');
  });

  it('encaminha a oferta do popup ao checkout informado', () => {
    render(<OfferSection />);
    fireEvent.click(screen.getByRole('button', { name: /ESCOLHER PACOTE BÁSICO/i }));
    expect(screen.getByRole('link', { name: /GARANTIR TUDO POR/i })).toHaveAttribute('href', 'https://pay.cakto.com.br/vfhdgrk_1350699');
  });

  it('leva as UTMs da página para o endereço do checkout', () => {
    history.replaceState(null, '', '/?utm_source=FB&utm_campaign=camp1%7C123&fbclid=IwAR0abc');
    render(<OfferSection />);
    const href = screen.getByRole('link', { name: /QUERO O PREMIUM COMPLETO/i }).getAttribute('href') ?? '';
    expect(href).toMatch(/utm_source=FB/);
    expect(href).toMatch(/utm_campaign=camp1%7C123/);
    expect(href).toMatch(/fbclid=IwAR0abc/);
  });

  it('registra o início do checkout com o valor do pacote ao clicar', async () => {
    const calls: unknown[][] = [];
    const recorder = Object.assign((...args: unknown[]) => { calls.push(args); }, { queue: [], loaded: true, version: '2.0' });
    (recorder as unknown as { push: unknown }).push = recorder;
    (window as unknown as { fbq: unknown }).fbq = recorder;
    localStorage.setItem('cookie_consent_advertising', JSON.stringify({ choice: 'granted', at: Date.now() }));
    render(<OfferSection />);
    fireEvent.click(screen.getByRole('link', { name: /QUERO O PREMIUM COMPLETO/i }));
    await vi.waitFor(() => expect(calls).toContainEqual(['track', 'InitiateCheckout', { value: 39.9, currency: 'BRL' }]));
  });
});