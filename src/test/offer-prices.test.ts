import { describe, it, expect } from 'vitest';
import { OFFER_PRICES } from '../lib/offer-prices';
describe('Valores dos pacotes', () => {
  it('Premium custa R$39,90', () => expect(OFFER_PRICES.premium).toBe(39.90));
  it('Básico custa R$10,00', () => expect(OFFER_PRICES.basic).toBe(10.00));
  it('Oferta após escolher básico custa R$29,90', () => expect(OFFER_PRICES.upgrade).toBe(29.90));
});
