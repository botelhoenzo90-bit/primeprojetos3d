# AGENTS.md

## Rules

- Use the shared WistiaVideo component for embeds with explicit media IDs and aspect ratios — deduplicates SDK loading and reserves stable player dimensions.

- Uploaded images that the site displays go to the Lovable Assets CDN as `src/assets/<folder>/<name>.<ext>.asset.json` pointers, imported in components via their `.url` — keeps the repo light and delivery on the CDN, instead of adding binaries to `public/`.
- Before hosting an uploaded photo, resize it to the size actually rendered (carousel cards ~800px wide) and re-encode to WebP — the raw exports are several MB each and would slow the page.
- Keep the gallery in the second section with a separate uploaded portrait-collection row above two deterministic mixed category rows and one shared CTA — preserves image proportions and predictable ordering.

- Keep offer prices in a shared pricing module for display and checkout tracking — prevents price/event drift.

- Main purchase CTAs share semantic green and crisp black-shadow tokens through the button component; the basic plan keeps its neutral variant to preserve consistent styling.
- Proxy the CDN asset path to the hosted app in local Vite development — local previews must render the same images as hosted pages.

- Summarize upgrade inclusions in the popup rather than repeating full plan lists; keep the purchase and basic continuation actions visible without internal scrolling.
- Calculate the promotional banner date through the shared Brasília-time formatter and refresh it while the page stays open — prevents hardcoded dates and UTC day drift.
- Load Meta and Cakto only through shared advertising permission; isolate Cakto in a removable same-origin tracking frame because its SDK has no teardown API, restore original checkout URLs and clear its storage on refusal. Only the permitted Cakto SDK decorates checkout URLs, preventing legacy attribution leakage.
- Keep one regional consent panel and permanent settings in the footer, with independent analytics and advertising answers through the shared consent module — accepting analytics must never unlock Meta.
