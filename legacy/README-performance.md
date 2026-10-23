# What changed, and what you still need to do

## Already done in the patched files
- **index / portfolio / dashboard:** card previews now try a small screenshot (`thumbs/<name>.webp`) first.
  If the screenshot doesn't exist yet, they fall back to the live preview, so nothing breaks while you add them.
- **logo.webp:** the logo was embedded as base64 (twice in index, once in portfolio). It is now one cached file.
  Upload `logo.webp` next to your HTML files.
- **Font Awesome** in portfolio now loads without blocking the page.
- **dashboard:** removed 3 unused Google Fonts (Space Grotesk, DM Serif Display, Syne); no blur on phones.
- **`transition: all`** replaced with specific properties.

## Step 1: make the 6 screenshots (biggest speed gain)
Names (put them in a new `thumbs/` folder in your repo):
mimiyuuuh, fashion-gazette, hiblaya, anna-barchel, lumiere, lumiere-crm  ->  e.g. `thumbs/lumiere.webp`

1. Open a sample page in Chrome, press F12, then Ctrl+Shift+M (device toolbar), choose "Responsive", set 1000 x 625.
2. Press Ctrl+Shift+P, type "screenshot", choose "Capture screenshot".
3. Open squoosh.app, load the PNG, resize to 600 px wide, format WebP, save (aim for 20-40 KB).

## Step 2: paste `sample-thumb-patch.html` into each sample's <head>
This makes any preview that still falls back to a live iframe much lighter. Check each sample for its own
blob/noise/canvas names and add them to the list.

## Step 3: replace the Tailwind CDN (index.html and portfolio.html; also check the samples)
I could not compile it here, so the CDN script tag is unchanged. To do it:
1. Download the **v3** standalone Tailwind CLI from github.com/tailwindlabs/tailwindcss/releases (the CDN is v3).
2. Create `input.css` containing: `@tailwind base; @tailwind components; @tailwind utilities;`
3. Run: `tailwindcss -i input.css -o tailwind.css --minify --content "./*.html"`
4. In each HTML file, replace `<script src="https://cdn.tailwindcss.com"></script>` with `<link rel="stylesheet" href="tailwind.css">`.
If you used a `tailwind.config` block in a page, move it to a `tailwind.config.js` first.

## Also
- `index.html` references `me.jpg`, which is not in your repo. Upload it (compressed to ~100 KB WebP/JPG) or remove the tag.
