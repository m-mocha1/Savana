# Savana — مطعم وكافيه

Premium, **Arabic-first** single-page website for **Savana Restaurant & Caffe**,
Beit Jala, Bethlehem. Designed natively for right-to-left (RTL) — not translated
after the fact. Vanilla HTML / CSS / JS — no build step, no dependencies.

## Run it

Open `index.html` in a browser. That's it.
(An internet connection is needed for the Google Fonts and the placeholder photography.)

## Structure

```
index.html          markup only — every string is a data-i18n key, no copy hard-coded
css/styles.css      RTL-native design system (tokens on top) built on logical properties
js/i18n/ar.js       العربية — the canonical content: all copy + dishes/gallery/testimonials
js/i18n/en.js       English locale (text only; images & prices inherit from ar.js)
js/i18n.js          engine: sets <html lang/dir>, fills keys, renders collections, lang toggle
js/main.js          nav, reveals, parallax, slider, image fallbacks
assests/            logo.jpg + hero_image.png (the two real brand assets)
```

## Localization (i18n)

The site is **Arabic-first** and internationalization-ready:

- `<html lang="ar" dir="rtl">` by default; the engine flips `dir` to `ltr`
  automatically for any `ltr` locale.
- **No strings live in components.** Markup carries keys only:
  - `data-i18n="key"` → text content
  - `data-i18n-html="key"` → trusted rich text (line breaks)
  - `data-i18n-attr="aria-label:key; placeholder:key2"` → attributes
- **Content is separated from layout.** Dishes, gallery and testimonials are
  data arrays in the locale files, rendered by `js/i18n.js`.
- **Adding a language = one file.** Copy `js/i18n/en.js`, translate the strings,
  add a `<script>` for it in `<head>`. A locale may supply *only* text — images,
  prices and structure fall back to `ar.js`. The header toggle switches locales
  and remembers the choice in `localStorage`.
- Every component is authored with CSS **logical properties**
  (`inset-inline`, `margin-inline`, `padding-inline-start`, `text-align: start`),
  so the whole layout mirrors correctly with no per-direction overrides — plus a
  few `[dir="ltr"]` tweaks for gradients and directional arrows.

## Design system

Everything derives from the two brand assets (the leaf-green logo on marble, and
the neon sign on golden Jerusalem stone at dusk):

| Token | Value | Source |
|---|---|---|
| `--leaf` / `--leaf-bright` | `#6fa53a` / `#8fd04e` | logo green / glowing sign at dusk |
| `--cream` / `--marble` / `--stone` | `#faf7f0` / `#f1ecdf` / `#e2d8c2` | marble logo backdrop, Jerusalem stone |
| `--dusk` | `#10160c` | evening sky & dark signage |
| `--amber` | `#e0a458` | lamplight in the hero photo |

**Arabic typography:** **El Messiri** (editorial display headings),
**IBM Plex Sans Arabic** (highly legible body — tuned for mobile), and
**Aref Ruqaa** (calligraphic accents). Generous line-height and **no
letter-spacing on Arabic runs** (which would break cursive joining). The Latin
`SAVANA` wordmark keeps its neon-sign treatment.

All tokens live at the top of `css/styles.css` — change them there and the whole
site follows.

## Prices & currency

Menu prices are in **Israeli Shekels (₪)** and live in `js/i18n/ar.js`
(`dishes[].price`). They are wrapped in `<bdi>` so the symbol and number render
correctly inside RTL text.

## Replacing placeholder content later

- **Copy, menu, dishes, testimonials** — all in
  `js/i18n/ar.js` (and `en.js` for English). Edit there, never in the markup.
- **Address** — `contact.address.value` in the locale files:
  *شارع جمعية العرب، بيت جالا، بيت لحم، الضفة الغربية*.
- **Photos** — every temporary image renders as an `<img … data-placeholder>`.
  Image URLs live in the locale data (dishes/gallery) and inline in the About
  section. If a placeholder ever fails to load, the site shows a branded stone
  tile instead of a broken image.
- **Map** — the Contact section has a `contact__map` placeholder; drop a Google
  Maps `<iframe>` in its place.
- **Phone / email / hours / socials** — Contact section and footer
  (`+970 2 274 1234`, `hello@savana.ps`, `#` social links).

> Note: the asset folder is spelled `assests/` on disk; all paths reference that
> spelling. If you rename it to `assets/`, update the references in `index.html`
> (hero + footer) and the `og:image` meta tag.
