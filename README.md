# Sales Dashboard

Visualizes monthly sales for **2022 / 2023 / 2024** with **Line / Bar / Pie** charts and a **custom threshold filter**.

**Live Demo:** https://sales-dashboard-7mrri5b1v-stone-shis-projects.vercel.app/ 
**GitHub Repo:** https://github.com/stone-coding/sales-dashboard

---

## Features
- Year switcher: 2022 / 2023 / 2024
- Chart types: Line, Bar, Pie (Chart.js + react-chartjs-2)
- Threshold filter: show only months with sales ≥ input
- Mock data: `src/data/sales.json` (easy to swap for a real API)
- Accessible controls (labeled select & input)
- Responsive layout with TailwindCSS

---

## Tech Stack
- **Next.js 15** (App Router) + **TypeScript**
- **TailwindCSS**
- **Chart.js** + **react-chartjs-2**

---

## Project Structure
```text
src/
  app/
    api/
      sales/
        route.ts        # optional: returns the same JSON as an API
    dashboard/
      page.tsx
    layout.tsx
    globals.css
  data/
    sales.json          # 12-month mock sales for 2022/2023/2024
components/
  SalesChart.tsx        # main chart component
