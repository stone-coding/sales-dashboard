import SalesChart from "../../components/SalesChart";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Dashboard</h1>
      <div className="max-w-2xl mx-auto">
        <SalesChart />
      </div>
    </div>
  );
}