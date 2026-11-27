/**
 * Parameters that tell the sales platform which ad brought the visitor.
 * Anything outside this list is dropped so tracking junk never reaches checkout.
 */
export const MARKETING_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
  "gclid",
  "gclsrc",
  "dclid",
  "fbclid",
  "gbraid",
  "wbraid",
  "msclkid",
  "ttclid",
  "twclid",
  "yclid",
  "epik",
  "li_fat_id",
  "igshid",
  "mc_eid",
  "mkt_tok",
  "irclickid",
  "clickid",
  "aff",
  "aff_sub",
  "aff_id",
  "ref",
  "src",
  "pixi",
] as const;

/** Only the marketing parameters present on the current page address. */
export function marketingParams(search: string = window.location.search): URLSearchParams {
  const incoming = new URLSearchParams(search);
  const kept = new URLSearchParams();
  for (const key of MARKETING_PARAMS) {
    const value = incoming.get(key);
    if (value) kept.set(key, value);
  }
  return kept;
}

/**
 * Checkout address with the campaign parameters appended.
 * Parameters already on the link are never overwritten.
 */
export function withMarketingParams(href: string, search: string = window.location.search): string {
  let url: URL;
  try {
    url = new URL(href, window.location.origin);
  } catch {
    return href;
  }
  for (const [key, value] of marketingParams(search)) {
    if (!url.searchParams.has(key)) url.searchParams.set(key, value);
  }
  return url.toString();
}
