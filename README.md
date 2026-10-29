# swaranan.github.io

Personal portfolio of **Swaranan Singha Barman**, Front-end Team Lead. Built with [Vite](https://vite.dev) + SCSS and deployed to GitHub Pages through GitHub Actions.

Live: https://swaranan.github.io

## Getting started

```bash
npm install
npm run dev       # local dev server with hot reload
npm run build     # production build -> dist/
npm run preview   # serve the dist/ build locally
```

## Project structure

```
.
├── .github/workflows/deploy.yml   # build & deploy to GitHub Pages
├── public/                        # copied as-is (favicon)
├── src/
│   ├── js/
│   │   ├── main.js                # entry: imports styles + modules
│   │   └── modules/               # header, nav, reveal
│   └── scss/
│       ├── main.scss              # entry: @use all partials
│       ├── abstracts/             # variables
│       ├── base/                  # reset, utilities
│       ├── components/            # buttons, chips, card
│       ├── layout/                # header, section, footer
│       └── sections/              # hero, about, craft, experience, toolkit, contact
├── index.html
├── package.json
└── vite.config.js
```

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which installs dependencies, runs `vite build`, and publishes `dist/` to GitHub Pages. Pages source must be set to **GitHub Actions** (Settings → Pages).
