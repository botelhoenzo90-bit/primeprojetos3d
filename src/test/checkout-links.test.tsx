import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import OfferSection from '../components/OfferSection';

vi.mock('framer-motion', () => ({
  motion: { div: 'div', h2: 'h2' },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
}));

afterEach(cleanup);

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
});