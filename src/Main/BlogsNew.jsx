import React from 'react'
import { BlogsModal } from './BlogsNew-componenets/BlogsModal'
import { useState } from 'react'

function BlogsNew() {
    const [openModal, setOpenModal] = useState(false);
  return (
    <div>

        <nav className="flex justify-between items-center bg-gray-100 p-4 shadow-md gap-4">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl font-bold text-blue-600">BlogSite</h1>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-blue-600">Home</a>
              <a href="#" className="hover:text-blue-600">About</a>
              <a href="#" className="hover:text-blue-600">Contact</a>
            </div>
          </div>
          <div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              onClick={() => setOpenModal(!openModal)} >
              Write Blog
            </button>
          </div>
        </nav>
     <BlogsModal openModal={openModal} setOpenModal={setOpenModal}/>  
    </div>
  )
}

export default BlogsNew