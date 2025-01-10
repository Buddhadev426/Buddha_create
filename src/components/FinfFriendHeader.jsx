import React from 'react'

function FinfFriendHeader() {
  return (
    <div>
        {/* Header Section */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold">Friends</h1>
        <div className="flex space-x-4 mt-2 text-sm">
          <button className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
            83 online
          </button>
          <button className="px-3 py-1 bg-gray-200 rounded-full">Suggestions</button>
          <button className="px-3 py-1 bg-gray-200 rounded-full">Your friends</button>
        </div>
      </div>

      {/* Friend Requests Section */}
      <div className="bg-white mt-4 p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold">Friend requests</h2>
          <a href="#" className="text-blue-600 text-sm">
            See all
          </a>
        </div>
        <p className="text-red-500 text-sm">148 Friend Requests</p>

    </div>
    </div>
  )
}

export default FinfFriendHeader;