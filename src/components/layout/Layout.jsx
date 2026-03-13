import Sidebar from "./Sidebar";
import Topbar from "./topbar.jsx";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen w-full bg-[#0a0a0f] text-gray-200 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="flex-1 overflow-auto p-5">{children}</div>
      </div>
    </div>
  );
}