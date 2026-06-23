# StarLapse — Marketing Website

A static, single-page landing site for StarLapse. No build step, no dependencies.

## Files
- `index.html` — page structure and copy
- `styles.css` — dark, star-themed styling (responsive, respects `prefers-reduced-motion`)
- `app.js` — animated starfield, scroll reveals, and the live frame counter

## Preview locally
```bash
cd apps/web
python3 -m http.server 8000
# open http://localhost:8000
```
Or just open `index.html` directly in a browser.

## Notes
- Deploy by serving this folder on any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages).
