# AGENTS.md

## Rules

- Uploaded images that the site displays go to the Lovable Assets CDN as `src/assets/<folder>/<name>.<ext>.asset.json` pointers, imported in components via their `.url` — keeps the repo light and delivery on the CDN, instead of adding binaries to `public/`.
- Before hosting an uploaded photo, resize it to the size actually rendered (carousel cards ~800px wide) and re-encode to WebP — the raw exports are several MB each and would slow the page.
