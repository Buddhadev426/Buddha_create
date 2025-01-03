import React from 'react'


function Card({user}) {

  return (
    <div className="flex items-center p-4 border-2 border-gray-200 rounded-lg shadow-md">
      <img src={user.image} className="w-16 h-16 rounded-full mr-4" />
      <div>
        <h2 className="text-lg font-bold">{user.name}</h2>
        <p className="text-sm text-gray-600">{user.designation}</p>
      </div>
    </div>
  )
}


export default Card