
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faPenToSquare } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon
import { div } from 'framer-motion/client';
import { useState } from 'react';
import { BlogsModal } from '../Main/BlogsNew-componenets/BlogsModal';


function NavbarBlog() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="bg-gray-50 text-gray-800">
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
          <button  className="text-black underline font-medium" 
            onClick={() => setOpenModal(true)}>
            Write Blog
            </button>
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

      <BlogsModal openModal={openModal} setOpenModal={setOpenModal}/> 

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center text-center py-16">
        <h1 className="text-2xl font-bold  mb-2">
          🎉 Limited Offer 🎉
        </h1>
        <p className="text-gray-600 mb-6">
          Subscribe today and get exclusive access to premium content!
        </p>

        <div className="relative w-full max-w-lg">
          <input
            type="email"
            placeholder="Enter your E-mail to subscribe"
            className=" bg-gray-50 w-full px-4 py-4 pr-28 border-2 border-blue-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            style={{ paddingRight: '4rem' }} // ensure input text is not under the button
          />
          <button
            className="absolute top-0 right-0 m-1 py-3 px-10 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition text-md"
            
          >
            Subscribe
          </button>
        </div>

        
        
      </main>
    </div>
  );
}
export default NavbarBlog;
