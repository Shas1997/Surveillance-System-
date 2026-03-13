import Layout from "../components/layout/Layout";
import CameraGrid from "../components/camera/CameraGrid";
import ThreatTimeline from "../components/panels/ThreatTimeline.jsx";

export default function Dashboard() {
  return (
    <Layout>
      <h2 className="text-white text-lg font-bold mb-4">Dashboard</h2>

      <div className="mb-6">
        <h3 className="text-white font-semibold mb-2">Live Surveillance Feeds</h3>
        <CameraGrid />
      </div>

      <ThreatTimeline />
    </Layout>
  );
}