import { beforeEach, expect, it, vi } from 'vitest';
import { rememberCheckoutStart, trackInitiateCheckout, trackPurchase } from '../lib/meta-events';

let calls: unknown[][];

function allowAdvertising() {
  localStorage.setItem('cookie_consent_advertising', JSON.stringify({ choice: 'granted', at: Date.now() }));
}

beforeEach(() => {
  localStorage.clear();
  calls = [];
  const fbq = vi.fn((...args: unknown[]) => {
    calls.push(args);
  });
  (window as unknown as { fbq: unknown }).fbq = fbq;
  allowAdvertising();
});

it('registra a venda com o valor do pacote escolhido e um evento estável', async () => {
  rememberCheckoutStart('premium');
  await trackPurchase('?orderId=99887');
  expect(calls).toEqual([['track', 'Purchase', { currency: 'BRL', value: 39.9 }, { eventID: 'prime-purchase-99887' }]]);
});

it('usa o valor informado no retorno quando ele vem na URL', async () => {
  rememberCheckoutStart('premium');
  await trackPurchase('?orderId=99887&value=10,00');
  expect(calls[0][2]).toEqual({ currency: 'BRL', value: 10 });
});

it('repete o mesmo evento ao recarregar o mesmo pedido, sem criar segunda venda', async () => {
  rememberCheckoutStart('basic');
  await trackPurchase('?orderId=555');
  await trackPurchase('?orderId=555');
  expect(calls.map((args) => (args[3] as { eventID: string }).eventID)).toEqual([
    'prime-purchase-555',
    'prime-purchase-555',
  ]);
});

it('não envia valor quando nenhum preço é conhecido', async () => {
  await trackPurchase('?orderId=777');
  expect(calls[0][2]).toEqual({ currency: 'BRL' });
});

it('registra o início do checkout com o preço do pacote básico', async () => {
  await trackInitiateCheckout('basic');
  expect(calls).toEqual([['track', 'InitiateCheckout', { value: 10, currency: 'BRL' }]]);
});

it('não registra a venda sem autorização de publicidade', async () => {
  localStorage.setItem('cookie_consent_advertising', JSON.stringify({ choice: 'denied', at: Date.now() }));
  rememberCheckoutStart('premium');
  await trackPurchase('?orderId=99887');
  await trackInitiateCheckout('premium');
  expect(calls).toEqual([]);
});
