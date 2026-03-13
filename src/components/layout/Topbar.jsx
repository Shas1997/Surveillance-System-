export default function Topbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-[#0d0d14]">
      <h1 className="text-lg font-bold text-white">Command Center</h1>

      <div className="flex items-center gap-4">
        <div className="px-4 py-2 text-gray-400 bg-[#1a1a2e] rounded-lg border border-gray-700">
          🔍 Search…
        </div>
        <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center">
          👤
        </div>
      </div>
    </header>
  );
}