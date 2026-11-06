# perch-site

Landing page for [Perch](https://github.com/trieuluan/perch-mac), a small hub that lives in your MacBook's notch.

Plain static HTML/CSS/JS, no build step:

- `index.html`: page content (English text lives here)
- `main.js`: Vietnamese translations, language toggle, copy buttons, the mock notch, and the latest version number (fetched from the GitHub releases API at runtime, so nothing needs editing on release)
- `assets/`: icon and demo GIFs, copied from `perch-mac/docs/media`

Preview locally:

```bash
python3 -m http.server 8765
```

Pushing to `main` deploys to GitHub Pages via `.github/workflows/pages.yml` (set **Settings › Pages › Source** to **GitHub Actions**). Add `?lang=vi` or `?lang=en` to force a language.

Perch is a fork of [Boring Notch](https://github.com/TheBoredTeam/boring.notch) by TheBoredTeam, licensed under GPL-3.0.
