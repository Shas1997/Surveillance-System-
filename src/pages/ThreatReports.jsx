import Layout from "../components/layout/Layout";

export default function ThreatReports() {
  const reports = [
    { id: 1, zone: "Main Lobby", type: "Crowd Anomaly", time: "14:12" },
    { id: 2, zone: "Parking L1", type: "Unauthorized Entry", time: "13:55" },
  ];

  return (
    <Layout>
      <h2 className="text-white text-lg font-bold mb-6">Threat Reports</h2>

      <div className="space-y-3">
        {reports.map(r => (
          <div
            key={r.id}
            className="p-4 rounded-lg bg-[#0d0d14] border border-gray-700"
          >
            <div className="flex justify-between">
              <span className="text-white font-semibold">{r.type}</span>
              <span className="text-gray-500 text-sm">{r.time}</span>
            </div>
            <p className="text-gray-400 text-sm mt-1">Zone: {r.zone}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}