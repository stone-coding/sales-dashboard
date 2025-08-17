
```md
# Sales Dashboard (Next.js 15 + TS + Tailwind)

[Live Demo]([https://<your-project>.vercel.app/dashboard](https://sales-dashboard-7mrri5b1v-stone-shis-projects.vercel.app/)) • [GitHub Repo]([https://github.com/<you>/sales-dashboard](https://github.com/stone-coding/sales-dashboard))

A simple dashboard that visualizes sales for **2022 / 2023 / 2024** with **Line / Bar / Pie** charts and a **custom threshold filter**.

## Features
- Year switcher: 2022 / 2023 / 2024
- Chart types: Line, Bar, Pie (chart.js + react-chartjs-2)
- Threshold filter: show only months with sales ≥ input
- Mock data: `src/data/sales.json` (can be swapped to real API)
- Accessible controls (labels for select/input)
- Responsive layout with TailwindCSS

## Tech Stack
- Next.js 15 (App Router) + TypeScript
- TailwindCSS
- chart.js + react-chartjs-2

## Project Structure
```

src/
app/
api/
sales/
route.ts        # optional API returning the same JSON
dashboard/
page.tsx
layout.tsx
globals.css
data/
sales.json          # 12-month mock sales for 2022/2023/2024
components/
SalesChart.tsx        # main chart component

````

## Getting Started

### Requirements
- Node 18/20+
- npm

### Install & Run
```bash
npm install
npm run dev
# open http://localhost:3000/dashboard
````

### Build & Start

```bash
npm run build
npm start
```

## Data & API

* Default data source: `src/data/sales.json`
* Optional API for enhancements: `GET /api/sales` (served by `src/app/api/sales/route.ts`)

To switch to API inside the component, replace the direct import with a `fetch('/api/sales')` call.

## Atomic Structure (brief)

* **Atoms**: Button, Select, Input
* **Molecule**: Chart controls (year/type/threshold)
* **Organism**: `SalesChart`
* **Page**: `Dashboard`

## Deploy

This repo is connected to **Vercel**. Any push to `main` triggers a new deployment.

* Live: `https://<your-project>.vercel.app/dashboard`

## Future Enhancements

* Real API integration (e.g., Kaggle dataset API / own backend)
* CSV import & export
* Unit tests (Vitest/RTL)
* Dark mode

```

```
