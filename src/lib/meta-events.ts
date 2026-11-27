import { canTrack } from "./consent";
import { OFFER_PRICES } from "./offer-prices";

export type CheckoutPlan = keyof typeof OFFER_PRICES;

const CLICK_KEY = "prime_checkout_start";

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
  if (!(await canTrack("advertising"))) return;
  window.fbq?.("track", "InitiateCheckout", { value: OFFER_PRICES[plan], currency: "BRL" });
}

/**
 * Sale confirmed on the return page. The event id stays the same for the same
 * order so reloading the page cannot count the sale twice.
 */
export async function trackPurchase(search: string = window.location.search): Promise<void> {
  if (!(await canTrack("advertising"))) return;
  const params = new URLSearchParams(search);
  const start = readCheckoutStart();
  const value = numericValue(firstParam(params, ["value", "valor"])) ?? start?.value ?? null;
  const orderId =
    firstParam(params, ["orderId", "order_id", "pedido", "transaction_id", "id_pedido"]) ?? start?.clickId ?? newId();
  const payload: Record<string, unknown> = { currency: "BRL" };
  if (value !== null) payload.value = value;
  window.fbq?.("track", "Purchase", payload, { eventID: `prime-purchase-${orderId}` });
}
