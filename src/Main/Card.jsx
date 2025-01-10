import { u } from 'framer-motion/client';
import React from "react";

function Card({ user }) {
  return (
    <div className=" bg-gray-100 mt-2 p-4 rounded-lg shadow-md">
      
        {/* Friend Request Card */}
        <div className="flex items-center mt-4">
          <img
            src={user.image}
            alt={`${user.name}'s thumbnail`}
            className="w-12 h-12 rounded-full border-2 border-gray-300"
          />
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-semibold">{user.name}</h3>
            <p className="text-sm text-gray-500">{user.mutual_friends} mutual friends</p>
          </div>
          <div className="flex space-x-2">
            <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
              Confirm
            </button>
            <button className="bg-gray-300 text-gray-800 px-3 py-1 rounded-md text-sm">
              Delete
            </button>
          </div>
        </div>
      </div>
    
  );
}

// function App() {
//   // Example user data
//   const user = {
//     name: "Meghnath",
//     image: "https://via.placeholder.com/50", // Replace with actual user image URL
//     mutual_friends: 1, // Example mutual friend count
//   };

//   return (
//     <div>
//       <Card user={user} />
//     </div>
//   );
// }

export default Card;