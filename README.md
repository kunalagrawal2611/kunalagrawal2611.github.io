# Kunal Agrawal | Portfolio

Dark technical portfolio for AI / computer vision research. Built with Vite, React 19, TypeScript, and Tailwind CSS.

**Live site:** [kunalagrawal2611.github.io](https://kunalagrawal2611.github.io)

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Analytics

Plausible is loaded via the same site script as the previous portfolio (`src/config/analytics.ts`). After deploy, visits appear in your [Plausible dashboard](https://plausible.io).

## Deploy (GitHub Pages)

Pushes to `main` on `kunalagrawal2611.github.io` trigger `.github/workflows/deploy.yml`.

1. Create or use the repo **`kunalagrawal2611/kunalagrawal2611.github.io`**
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**
3. Push this project to `main`

```bash
git remote add origin https://github.com/kunalagrawal2611/kunalagrawal2611.github.io.git
git push -u origin main
```

## Scholar metrics

```bash
npm run update-metrics
```

Updates `src/data/scholar-metrics.json` from Google Scholar (run locally or in CI).
