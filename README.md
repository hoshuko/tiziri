<div align="center">

<a href="https://hoshuko.github.io/tiziri/en/"><img src="https://hoshuko.github.io/assets/readme/tiziri-banner-en.jpg" alt="Tiziri on desktop and mobile" width="100%"></a>

# Tiziri

**A clothing boutique’s wardrobe online: every piece, photographed in the shop, is worn by a wooden mannequin that comes to life.**

**English** · [Français](README.fr.md) · [Español](README.es.md)

[![Live demo](https://img.shields.io/badge/Live_demo-hoshuko.github.io-B4532F?style=for-the-badge)](https://hoshuko.github.io/tiziri/en/) [![Promo video](https://img.shields.io/badge/Promo_video-60_s_%C2%B7_3_formats-1C1714?style=for-the-badge)](https://hoshuko.github.io/en.html#tiziri) [![Languages](https://img.shields.io/badge/Languages-FR_%C2%B7_AR_%C2%B7_EN_%C2%B7_ES-555555?style=for-the-badge)](#languages) [![License](https://img.shields.io/badge/License-PolyForm_Noncommercial-555555?style=for-the-badge)](LICENSE)

</div>

## Preview

<a href="https://hoshuko.github.io/en.html#tiziri"><img src="https://hoshuko.github.io/assets/readme/tiziri-preview-en.webp" alt="Animated preview of Tiziri" width="100%"></a>

The site’s signature animation, taken from its 60-second promo video. [Watch the full promo video →](https://hoshuko.github.io/en.html#tiziri)

## Highlights

- **A live 3D studio.** On the home page, Elle and Lui, wooden mannequins modelled in code, pose in a sunlit studio and follow the cursor.
- **From shop photo to runway.** Each garment is photographed as it is in the shop, cut out, then worn by Elle or Lui, articulated wooden mannequins that start walking.
- **Fitting room.** Pick a piece and watch the mannequin try it on, pose after pose, then walk.
- **The runway.** The whole shop parades on a pinned, scroll-driven catwalk.
- **Every piece up close.** Worn, ghost mannequin, studio and raw photo: the raw view shows the untouched pixels, and colours are read from the photo.
- **Four languages.** French, Arabic (right to left), English and Spanish.
- **Order on WhatsApp.** Each piece writes its own message: name, price and link; collect in store or cash on delivery.

## Screenshots

| Desktop | Mobile |
| :---: | :---: |
| <img src="https://hoshuko.github.io/assets/shots/tiziri-desktop-en.webp" alt="Tiziri on desktop" width="560"> | <img src="https://hoshuko.github.io/assets/shots/tiziri-mobile-en.webp" alt="Tiziri on mobile" width="200"> |

## Promo videos

Three formats, 60 seconds each, with music and sound effects created from scratch (no copyrighted audio). Click a poster to play the video.

| Landscape · 16:9 | Feed · 4:5 | Vertical · 9:16 |
| :---: | :---: | :---: |
| <a href="https://hoshuko.github.io/assets/video/tiziri-169-en.mp4"><img src="https://hoshuko.github.io/assets/video/tiziri-169-en.jpg" alt="Tiziri promo video, Landscape · 16:9" width="360"></a> | <a href="https://hoshuko.github.io/assets/video/tiziri-45-en.mp4"><img src="https://hoshuko.github.io/assets/video/tiziri-45-en.jpg" alt="Tiziri promo video, Feed · 4:5" width="180"></a> | <a href="https://hoshuko.github.io/assets/video/tiziri-916-en.mp4"><img src="https://hoshuko.github.io/assets/video/tiziri-916-en.jpg" alt="Tiziri promo video, Vertical · 9:16" width="152"></a> |
| <sub>YouTube, websites</sub> | <sub>Facebook & Instagram feeds</sub> | <sub>Reels, Stories, WhatsApp</sub> |

## Languages

The site ships in French (root, default), Arabic (`ar/`, right to left), English (`en/`) and Spanish (`es/`). Every page exists in each language as static HTML, so search engines and link previews see the right text, and the language switcher sits in the header.

## Under the hood

- Every garment is processed once and kept in a “wardrobe”: a cut-out made on the Mac (Apple Vision), then worn views, a ghost-mannequin shot and an 8-second video generated with Google Flow from the photo. Nothing is generated when the site is built or viewed.
- Built with Astro (static output): this repository is the published site, ready to serve. GSAP, Lenis and Three.js drive the animations.
- WebP images, self-hosted fonts, `prefers-reduced-motion` support, videos that load only when needed, and layouts checked from 360 px wide.
- Privacy by design: no cookies, no analytics, no third-party requests, and a strict Content Security Policy.

## Run it locally

The site is built to live at `/tiziri/`, as on GitHub Pages. Serve the folder that contains it with any static server, for example Python:

```bash
git clone https://github.com/hoshuko/tiziri.git
python3 -m http.server 8000
```

Then open <http://localhost:8000/tiziri/>.

## Make it yours

This repository holds the built site. Its source, an Astro project with the wardrobe (one folder per garment: photo, cut-out, views, video and texts in four languages), lives in a private workspace. Shop details (name, WhatsApp number, address, opening hours, delivery) sit in one configuration file; `demo: true` shows the demo notice and opens WhatsApp without a number. Want this site for your shop? Open an issue.

## Credits

Four garments were photographed in a boutique in Tigzirt; the eight demo pieces come from Unsplash photos. Elle and Lui, the wooden mannequins, are modelled in code (Three.js); the worn views, ghost-mannequin shots and videos were generated with Google Flow from their renders and these photos, and are labelled as such on each product page. Full credits are in [CREDITS.md](CREDITS.md). Fonts are under the SIL Open Font License 1.1 ([`assets/fonts/OFL.txt`](assets/fonts/OFL.txt)). The shop name, phone number and prices are fictional.

## License

The code is released under the [PolyForm Noncommercial License 1.0.0](LICENSE). You may use, study and modify it for any non-commercial purpose: personal projects, learning, teaching, charities. Commercial use, such as delivering this template to a paying client, requires a separate licence: open an issue on this repository to ask. Photos and fonts keep their own licences (see above).

## Security

Found a vulnerability? Please report it privately from the repository’s **Security** tab (“Report a vulnerability”) rather than in a public issue. See [SECURITY.md](SECURITY.md).

## More templates

Part of **Storefronts in motion**, a series of five scroll-animated website templates:

- **[Maison Billot](https://github.com/hoshuko/maison-billot/blob/main/README.md)**: A scroll-animated website for an artisan butcher: beef explained cut by cut.
- **[Tafat](https://github.com/hoshuko/tafat/blob/main/README.md)**: A website for a women-run home cleaning team on the Kabylian coast: a squeegee wipes the window clean as you scroll.
- **[Atelier Nacre](https://github.com/hoshuko/atelier-nacre/blob/main/README.md)**: A website for a nail studio in Bordeaux: a gel set taken apart layer by layer, a colour try-on and online booking.
- **[Lalla Warda](https://github.com/hoshuko/lalla-warda/blob/main/README.md)**: The website of a natural cosmetics brand from Kenitra: a 3D rose blooms into a serum bottle, and every product shows what it is made of and how it goes on the face and hair.

Portfolio: <https://hoshuko.github.io/en.html> · YouTube: <https://www.youtube.com/@Hosh-uko>
