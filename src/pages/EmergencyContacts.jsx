import Layout from "../components/layout/Layout";

export default function EmergencyContacts() {
  const contacts = [
    { label: "Police (100)", icon: "📞" },
    { label: "Medical Unit", icon: "🏥" },
    { label: "Fire Department", icon: "🚒" },
  ];

  return (
    <Layout>
      <h2 className="text-white text-lg font-bold mb-6">Emergency Contacts</h2>

      <div className="space-y-3 max-w-md">
        {contacts.map(c => (
          <button
            key={c.label}
            className="w-full flex items-center justify-between p-4 rounded-lg bg-[#1a1a2e] border border-gray-700 text-gray-300 hover:bg-[#222344] transition"
          >
            <span>{c.label}</span>
            <span className="text-xl">{c.icon}</span>
          </button>
        ))}
      </div>
    </Layout>
  );
}