export default function ThreatTimeline() {
  const events = [
    { type: "current", label: "CURRENT STATUS", time: "14:45", text: "Lobby occupancy increasing." },
    { type: "resolved", label: "RESOLVED", time: "14:22", text: "Bag checked – safe." }
  ];

  return (
    <div className="rounded-lg p-4 bg-[#0d0d14] border border-gray-700">
      <h3 className="text-sm font-bold text-white mb-3">AI Threat Assessment Timeline</h3>

      {events.map((e, i) => (
        <div key={i} className="mb-3">
          <div className={`text-xs font-bold ${e.type === "current" ? "text-blue-400" : "text-green-400"}`}>
            {e.label} • {e.time}
          </div>
          <p className="text-xs text-gray-400">{e.text}</p>
        </div>
      ))}
    </div>
  );
}