import Layout from "../components/layout/Layout";

export default function Settings() {
  return (
    <Layout>
      <h2 className="text-white text-lg font-bold mb-6">System Settings</h2>

      <div className="space-y-4 max-w-lg">
        <div className="p-4 rounded-lg bg-[#0d0d14] border border-gray-700">
          <h3 className="text-white font-semibold mb-2">System Preferences</h3>
          <p className="text-gray-400 text-sm mb-3">
            Adjust system-wide configuration settings.
          </p>
          <button className="px-4 py-2 rounded bg-blue-600 text-white">Open Settings</button>
        </div>

        <div className="p-4 rounded-lg bg-[#0d0d14] border border-gray-700">
          <h3 className="text-white font-semibold mb-2">User Management</h3>
          <p className="text-gray-400 text-sm mb-3">
            Add or remove operators and manage permissions.
          </p>
          <button className="px-4 py-2 rounded bg-blue-600 text-white">Manage Users</button>
        </div>
      </div>
    </Layout>
  );
}