import Layout from "../components/layout/Layout";
import StatCard from "../components/widgets/StatCard";
import HeatmapWidget from "../components/widgets/HeatmapWidget";

export default function Analytics() {
  return (
    <Layout>
      <h2 className="text-white text-lg font-bold mb-6">Analytics Overview</h2>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <StatCard title="Total Detections" value="1,482" trend="+12%" />
        <StatCard title="Avg Safety Score" value="94.2%" trend="+3%" />
        <StatCard title="Active Alerts" value="02" trend="-1" />
      </div>

      <HeatmapWidget />
    </Layout>
  );
}