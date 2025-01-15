
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faPenToSquare } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon


function NavbarBlog() {
  return (
    <div className="bg-white text-gray-800">
      {/* Navbar */}
      <header className="flex justify-between items-center px-12 py-4 border-b">
        <div className="flex items-center space-x-20">
          <h1 className="text-xl font-bold text-blue-600">Blogs</h1>
          <nav className="flex space-x-10">
            <a href="#" className="text-gray-800 hover:text-blue-600 font-bold">Home</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">Blog</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">Categories</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">Contact</a>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
        <div><FontAwesomeIcon icon={faPenToSquare} className="text-blue-800 text-sm"/></div>
          <a href="#" className="text-black underline font-medium">Write Blogs</a>
          <div>
            <FontAwesomeIcon icon={faBell} className="text-blue-800 text-lg" /> {/* Use the imported icon */}
          </div>
          <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDQkNUZ7TsTrA0609NpbLkPjdFel7AgR_2RA&s"
              alt="User Avatar"
              className="object-cover w-full h-full border-2 border-blue-500 rounded-full"
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavbarBlog;
