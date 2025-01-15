
import React from 'react'

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow p-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Logout</button>
      </header>

      {/* Sidebar and Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-gray-100 flex flex-col">
          <nav className="flex-1">
            <ul className="space-y-2 p-4">
              <li>
                <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700">
                  <span className="material-icons-outlined mr-3">dashboard</span>
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700">
                  <span className="material-icons-outlined mr-3">analytics</span>
                  Analytics
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700">
                  <span className="material-icons-outlined mr-3">settings</span>
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Welcome to the Dashboard</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800">Statistics</h3>
              <p className="text-gray-600 mt-2">Some quick stats about your app.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
              <p className="text-gray-600 mt-2">Latest updates from your users.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800">Reports</h3>
              <p className="text-gray-600 mt-2">Download detailed reports here.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}


export default Dashboard
