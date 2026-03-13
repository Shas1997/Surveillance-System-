export default function Sidebar() {
  const nav = [
    "Dashboard",
    "Live Feeds",
    "Threat Reports",
    "Emergency Contacts",
    "Analytics",
    "Settings"
  ];

  return (
    <aside className="w-56 border-r border-gray-800 bg-[#0d0d14] flex flex-col">
      <div className="px-5 py-5 border-b border-gray-800">
        <div className="text-lg font-bold text-white tracking-wide">SecureVision</div>
        <p className="text-xs text-gray-500">Surveillance Ops</p>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {nav.map(item => (
          <button key={item} className="w-full text-left px-3 py-2 rounded-lg text-gray-400 hover:bg-[#111827] hover:text-white transition">
            {item}
          </button>
        ))}
      </nav>

      <div className="p-4">
        <button className="w-full py-2 rounded-lg bg-red-600 text-white font-bold shadow-lg hover:bg-red-500">
          SOS MODE
        </button>
      </div>
    </aside>
  );
}