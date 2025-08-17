"use client";
import { useMemo, useState } from "react";
import sales from "@/data/sales.json"; // get data from JSON file
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale, LinearScale, BarElement, LineElement, PointElement,
  ArcElement, Tooltip, Legend, Title,
} from "chart.js";

ChartJS.register(
  CategoryScale, LinearScale, BarElement, LineElement, PointElement,
  ArcElement, Tooltip, Legend, Title
);

type SalesMap = Record<string, number[]>;

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const COLORS = [
  "#4F46E5", // indigo
  "#16A34A", // green
  "#A855F7", // purple
  "#F59E0B", // amber
  "#22C55E", // emerald
  "#3B82F6", // blue
  "#EF4444", // red
  "#14B8A6", // teal
  "#F97316", // orange
  "#E11D48", // rose
  "#0EA5E9", // sky
  "#84CC16", // lime
];

export default function SalesChart() {
  const all = sales as SalesMap;                      // get all sales data
  const [year, setYear] = useState<"2022" | "2023" | "2024">("2024");
  const [type, setType] = useState<"line" | "bar" | "pie">("line");
  const [threshold, setThreshold] = useState<number>(0);

  const raw = useMemo(() => all?.[year] ?? [], [all, year]);
  const filtered = useMemo(
    () => raw.map((v, i) => ({ label: MONTHS[i], value: Number(v) }))
            .filter(({ value }) => value >= threshold),
    [raw, threshold]
  );

  const labels = filtered.map(d => d.label);
  const values = filtered.map(d => d.value);
  const ds = {
  labels,
  datasets: [
    {
      label: `Sales ${year}`,
      data: values,
      backgroundColor: type === "line" 
        ? "#3B82F6" 
        : COLORS.slice(0, values.length),
      borderColor: type === "line" 
        ? "#3B82F6" 
        : "#ffffff",
      borderWidth: type === "line" ? 2 : 1,
      tension: type === "line" ? 0.3 : 0,
    },
  ],
};


  const total = values.reduce((s, v) => s + v, 0);

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Sales Dashboard</h2>

      {/* components */}
      <div className="grid gap-3 md:grid-cols-3 mb-4">
        <label htmlFor="yearSelect" className="sr-only">Select Year</label>
        <select
          id="yearSelect"
          className="border px-3 py-2 rounded"
          value={year}
          onChange={(e) => setYear(e.target.value as any)}
        >
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>

        <input
          type="number"
          placeholder="Sales threshold (filter)"
          className="border px-3 py-2 rounded"
          value={threshold}
          onChange={(e) => setThreshold(Number(e.target.value) || 0)}
        />

        <div className="flex gap-2">
          <button onClick={() => setType("line")} className="px-3 py-2 bg-blue-600 text-white rounded">Line</button>
          <button onClick={() => setType("bar")}  className="px-3 py-2 bg-green-600 text-white rounded">Bar</button>
          <button onClick={() => setType("pie")}  className="px-3 py-2 bg-purple-600 text-white rounded">Pie</button>
        </div>
      </div>

      {/* count */}
      <div className="text-sm text-gray-600 mb-2">
        Showing <b>{values.length}</b> months in {year} with sales ≥ <b>{threshold}</b>. &nbsp;
        Total: <b>{total}</b>
      </div>

      {/* graph */}
      <div className="w-full h-[340px]">
        {type === "line" && <Line data={ds} options={{ responsive: true, maintainAspectRatio: false }} />}
        {type === "bar"  && <Bar  data={ds} options={{ responsive: true, maintainAspectRatio: false }} />}
        {type === "pie"  && <Pie  data={ds} options={{ responsive: true, maintainAspectRatio: false }} />}
      </div>
    </div>
  );
}
