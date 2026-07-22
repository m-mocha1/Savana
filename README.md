# Savana — Restaurant & Caffe

Premium single-page website for **Savana Restaurant & Caffe**, Ras Beit Jala, Bethlehem.
Vanilla HTML / CSS / JS — no build step, no dependencies.

## Run it

Open `index.html` in a browser. That's it.
(An internet connection is needed for the Google Fonts and the placeholder photography.)

## Structure

```
index.html        all content & sections
css/styles.css    design system (tokens at the top) + all components
js/main.js        nav, reveals, parallax, slider, form, image fallbacks
assests/          logo.jpg + hero_image.png (the two real brand assets)
```

## Design system

Everything derives from the two brand assets:

| Token | Value | Source |
|---|---|---|
| `--leaf` / `--leaf-bright` | `#6fa53a` / `#8fd04e` | logo green / glowing sign at dusk |
| `--cream` / `--marble` / `--stone` | `#faf7f0` / `#f1ecdf` / `#e2d8c2` | marble logo backdrop, Jerusalem stone |
| `--dusk` | `#10160c` | evening sky & dark signage |
| `--amber` | `#e0a458` | lamplight in the hero photo |

Type: **Fraunces** (display serif, echoes the logo's slab letters), **Jost** (body),
**Great Vibes** (script accents, echoes the "Delicious" flourish).

All tokens live at the top of `css/styles.css` — change them there and the whole
site follows.

## Replacing placeholder content later

- **Photos** — every temporary image is an `<img … data-placeholder>` tag pointing
  at Unsplash. Search `data-placeholder` in `index.html`, swap the `src` for your
  real photo (keep the `alt`, `width`, `height`). If a placeholder ever fails to
  load, the site shows a branded stone tile instead of a broken image.
- **Map** — in the Contact section there's a commented-out `<iframe>` example
  directly above `<div class="contact__map">`. Paste your Google Maps embed URL
  there and delete the placeholder `div`.
- **Menu, prices, copy, testimonials** — all invented placeholder content; edit
  directly in `index.html`.
- **Phone / email / hours / socials** — placeholders in the Contact section and
  footer (`+970 2 274 1234`, `hello@savana.ps`, `#` social links).

> Note: the asset folder is spelled `assests/` on disk; all paths reference that
> spelling. If you rename it to `assets/`, update the two references in
> `index.html` (hero + footer) and the `og:image` meta tag.
