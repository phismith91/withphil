# withphil.de — Portfolio-Hub

Persönliche Portfolio-Seite unter [withphil.de](https://withphil.de). Eine statische Single-Page-App, die Projekte, Skills und Domains zusammenführt.

## Tech Stack

- **Framework:** React 18 + Vite + TypeScript
- **Styling:** Tailwind CSS + shadcn/ui + framer-motion
- **Testing:** Vitest
- **Deploy:** GitHub Pages (CNAME: withphil.de)

## Lokale Entwicklung

```sh
# Abhängigkeiten installieren
npm install

# Dev-Server starten (http://localhost:5173)
npm run dev

# Build
npm run build

# Tests
npm test
```

## Deployment

Automatisch via GitHub Actions bei Push auf `main` → `gh-pages`-Branch.
CNAME ist in `/CNAME` hinterlegt (`withphil.de`).
