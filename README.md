# 404 Studio (Next.js)

The 404studio.click portfolio, converted from a single-file HTML SPA to the Next.js App Router (TypeScript).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Structure

```
app/
  layout.tsx            fonts (next/font), metadata, JSON-LD, theme-flash guard, <Shell>
  globals.css           the original site CSS, unchanged apart from the font variables
  page.tsx              /            home (canvas hero + links)
  work/ samples/ tools/ reviews/ me/ contact/
  orchid/ privacy/ terms/ data-deletion/
  samples/[slug]/       /samples/<slug>  gallery + full-screen device preview
  sitemap.ts robots.ts  replace sitemap.xml / robots.txt
components/
  Shell.tsx             loader, HUD, menu, Ctrl+K palette, theme toggle, page-wipe transitions
  TLink.tsx             <Link> that plays the wipe before navigating
  HomeHero.tsx  Tools.tsx  SampleCards.tsx  SampleViewer.tsx  WorkScreens.tsx  IdCard.tsx  CopyButton.tsx
lib/data.ts             samples, toolkit, page titles/descriptions (was inline in the old script)
public/                 images, kape-noval video, and the six sample sites (sample-*.html)
legacy/                 old pages that the SPA never routed to (kept for reference, not served)
```

## Notes

- Every route has its own server-rendered metadata (title, description, canonical, Open Graph, Twitter). The old SPA rewrote these in JavaScript.
- Sample sites are still standalone HTML files in `public/` (they are 1 to 1.5 MB each with embedded assets), so their URLs are unchanged. The viewer loads them in an iframe.
- `/about` redirects to `/me`, as before. Unknown sample slugs and paths now return a real 404 instead of falling back to the home page.
- Static / `.htaccess` / `_redirects` / `vercel.json` rewrites are no longer needed.
