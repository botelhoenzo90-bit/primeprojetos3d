import { ensureMetaPixel } from "./meta-pixel";
import { OFFER_PRICES } from "./offer-prices";

export type CheckoutPlan = keyof typeof OFFER_PRICES;

const CLICK_KEY = "prime_checkout_start";
const reportedOrders = new Set<string>();

type ClickRecord = { plan: CheckoutPlan; value: number; at: number; clickId: string };

function newId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

/** Remembers the plan so the success page can report the same sale amount. */
export function rememberCheckoutStart(plan: CheckoutPlan): ClickRecord {
  const record: ClickRecord = { plan, value: OFFER_PRICES[plan], at: Date.now(), clickId: newId() };
  try {
    localStorage.setItem(CLICK_KEY, JSON.stringify(record));
  } catch {
    /* Storage may be unavailable. */
  }
  return record;
}

export function readCheckoutStart(): ClickRecord | null {
  try {
    const raw = localStorage.getItem(CLICK_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ClickRecord;
    if (typeof parsed?.value !== "number" || typeof parsed?.clickId !== "string") return null;
    return parsed;
  } catch {
    return null;
  }
}

function firstParam(params: URLSearchParams, names: string[]): string | null {
  for (const name of names) {
    const value = params.get(name);
    if (value) return value;
  }
  return null;
}

function numericValue(raw: string | null): number | null {
  if (raw === null) return null;
  const parsed = Number(raw.replace(",", "."));
  return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
}

/** Checkout was started for that plan; only fires with advertising permission. */
export async function trackInitiateCheckout(plan: CheckoutPlan): Promise<void> {
  if (!(await ensureMetaPixel())) return;
  window.fbq?.("track", "InitiateCheckout", { value: OFFER_PRICES[plan], currency: "BRL" });
}

/**
 * Requires a payment-success redirect with an order id; an ordinary page visit
 * or checkout click is not a sale. This helper does not verify payment itself.
 */
export async function trackPurchase(search: string = window.location.search): Promise<void> {
  const params = new URLSearchParams(search);
  const orderId = firstParam(params, ["orderId", "order_id", "pedido", "transaction_id", "id_pedido"]);
  if (!orderId) return;
  if (!(await ensureMetaPixel())) return;
  const eventId = `prime-purchase-${orderId}`;
  const marker = `prime_reported_${eventId}`;
  if (reportedOrders.has(eventId)) return;
  try { if (sessionStorage.getItem(marker)) return; } catch { /* Storage may be unavailable. */ }
  const start = readCheckoutStart();
  const value = numericValue(firstParam(params, ["value", "valor"])) ?? start?.value ?? null;
  const payload: Record<string, unknown> = { currency: "BRL" };
  if (value !== null) payload.value = value;
  const pixel = window.fbq;
  if (!pixel) return;
  pixel("track", "Purchase", payload, { eventID: eventId });
  reportedOrders.add(eventId);
  try { sessionStorage.setItem(marker, "1"); } catch { /* In-memory deduplication remains active. */ }
}
