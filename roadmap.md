# Tasks

- [x] Update hero subtitle, remove marketplaces image, reduce portrait video and add viewing prompts to both videos; restyle community card with uploaded image and rename gallery heading. Verified layouts at 394px/1280px, Clarity zjwbt40fqf SDK HTTP 200 and collection HTTP 204, regional consent blocking and 14 regression tests; provider dashboard display not verified.

- [x] Replace the hero image with the supplied Wistia video, remove the ideas section, highlight the free community below bonuses and inside library features, and swap delivery/compatibility sections; playback, section order and layouts verified at 394px and 906px without runtime errors.

- [x] Install Cakto campaign tracker with existing advertising permission; 14 tests passed; browser verified all three checkout links, stored campaign on return, page-view request and withdrawal. Publication and Cakto dashboard receipt remain unverified.

- [x] Remove old Meta, Clarity and Utmify code and checkout query forwarding; install Meta pixel 2150691958883963 gated by advertising permission; eight tests passed, SDK/config returned 200 and blocked-region/browser opt-out checks passed.
- [x] Add the confirmed regional authorization banner with separate analytics/advertising choices, privacy policy and permanent settings; 11 tests passed and GB/CA/BR/unknown-location acceptance, rejection, withdrawal and reload checks passed on mobile/desktop.
- [ ] Verify new Meta PageView transmission and provider receipt on the published site — publication not requested and no connected Events Manager; local SDK/config loaded but no event request was observed.

- [x] Add two seconds to the sales notification interval and change the hero subtitle to “vender no:”; interval test passed and subtitle verified in the browser.

- [x] Update Premium, Basic and popup checkout destinations; slow category, bonus and testimonial rows while preserving the first collection row; six tests passed and all three buttons preserved UTMs in browser checks.

- [x] Compact mobile hero subtitle, enlarge popup's crossed-out price and keep banner date current in Brasília with “até”; date rollover and layout verified at 320px, 375px, 394px and 1280px; six tests passed.

- [x] Restore Premium CTA, enlarge marketplaces, wrap mobile benefits subtitle and expand popup inclusions with a solid gray basic button; verified without scrolling at 320px, 375px, 394px, 1280px and landscape 844px.

- [x] Adjust marketplace size, move compatibility below guarantee, refresh download/bonus copy and CTAs, set basic price to R$19,90 and compact the upgrade popup; verified at 320px, 375px, 906px and 1280px with basic checkout URL, UTM and event value.

- [x] Strengthen hero subtitle and enlarge main image; balance desktop headings and show offers side by side.
- [x] Extend compatibility loops edge to edge and change green heading accents to orange.
- [x] Repair missing offer/testimonial images and verify mobile/desktop rendering.

- [x] Add the six uploaded images to the category collection.
- [x] Mix all category photos into two stacked carousels and keep one button below them.
- [x] Make bonus photos fill equal-size image areas.
- [x] Verify the carousels and bonus images on mobile and desktop.
- [x] Add the religious collection photo to the carousels.
- [x] Update first section with supplied logo, marketplace image and main image; use logo for favicon and sharing.
- [x] Move category gallery to second section and add an upper carousel with supplied collection images.
- [x] Adjust headings, plan prices, checkout event values and WhatsApp/email access notices.
- [x] Verify mobile, desktop and the basic-to-premium offer.
- [ ] Confirm real rating totals and buyer activity before displaying customer statistics or purchase notifications — awaiting real customer data.
- [ ] Verify the new prices charged by Cakto — checkout links preserved; external product prices require confirmation.
- [x] Add four collection photos and two testimonial screenshots; speed up the first gallery row.
- [x] Crop circular profile photos, remove blue strip, compact compatibility/access notices and add footer logo.
- [x] Verify updated layouts on mobile and desktop.
- [x] Refresh hero headline/subtitle and replace marketplace image; restore compact compatibility carousels and smaller mobile notification.
- [ ] Confirm customer name/city purchase records and real 4,9/5,0 rating with 4.378 reviews — no invented social proof displayed.
- [x] Replace hero heading with uploaded artwork, compact top/marketplace spacing, remove requested benefit, and unify green CTAs with black shadows.
- [x] Replace hero Wistia video with the supplied Mega Pack artwork (CDN WebP) and remove the "Dê o play" line; verified image renders and phrase is gone at 390px/1280px.
- [x] Fix checkout tracking: forward every UTM/click-id to Cakto, fire InitiateCheckout on click and Purchase on the new /obrigado return page with a stable event id; 34 tests passed, browser confirmed UTMs in the checkout address and the Purchase call with value 39,90. Meta receipt still unverified (sandbox browser sends no hit; check Test Events).
