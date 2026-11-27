import { describe, expect, it } from 'vitest';
import { marketingParams, withMarketingParams } from '../lib/checkout-links';

const SEARCH =
  '?utm_source=FB&utm_medium=conjuntoA&utm_campaign=camp1|123&utm_content=anuncio1|456&utm_term=placement&fbclid=IwAR0abc&gclid=xyz&naoenviar=1';

describe('Parâmetros de campanha no checkout', () => {
  it('leva todas as UTMs e identificadores de clique', () => {
    const params = new URL(withMarketingParams('https://pay.cakto.com.br/vfa8ugj_1323876', SEARCH)).searchParams;
    expect(params.get('utm_source')).toBe('FB');
    expect(params.get('utm_medium')).toBe('conjuntoA');
    expect(params.get('utm_campaign')).toBe('camp1|123');
    expect(params.get('utm_content')).toBe('anuncio1|456');
    expect(params.get('utm_term')).toBe('placement');
    expect(params.get('fbclid')).toBe('IwAR0abc');
    expect(params.get('gclid')).toBe('xyz');
  });

  it('não envia parâmetros que não são de campanha', () => {
    const params = new URL(withMarketingParams('https://pay.cakto.com.br/vfa8ugj_1323876', SEARCH)).searchParams;
    expect(params.get('naoenviar')).toBeNull();
  });

  it('não duplica nem sobrescreve parâmetro que já está no link', () => {
    const url = withMarketingParams('https://pay.cakto.com.br/buf4wp3_1350697?utm_source=cakto', SEARCH);
    expect(new URL(url).searchParams.getAll('utm_source')).toEqual(['cakto']);
  });

  it('resolve um caminho relativo e ainda anexa as UTMs', () => {
    const url = withMarketingParams('/checkout/pedido', SEARCH);
    expect(url.startsWith('http://localhost:3000/checkout/pedido?')).toBe(true);
    expect(new URL(url).searchParams.get('utm_source')).toBe('FB');
  });

  it('ignora parâmetro de campanha vazio', () => {
    expect(marketingParams('?utm_source=&utm_medium=pago').toString()).toBe('utm_medium=pago');
  });
});
