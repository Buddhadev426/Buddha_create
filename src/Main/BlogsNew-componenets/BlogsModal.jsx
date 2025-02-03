import React from 'react'
import { useState } from 'react'

  export function BlogsModal({openModal, setOpenModal}) {

    const [category, setCategory] = useState('');
    const [coverImage, setCoverImage] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    const handleBlogSubmit = async () => {

      try {

        if (!category || !coverImage || !title || !content) {
          return alert('Please fill in all fields');
           
         }
         const newBlog = {
           category : category,
           coverImage : coverImage,
           title : title,
           content : content
         }
         const res = await fetch('http://localhost:3000/blogs/create', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           credentials: 'include',
           body: JSON.stringify({ newBlog }),
         });
           const data = await res.json();
           console.log(data);
        } catch (error) {
          console.log("can't create blog");
        }
        
      
    }
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Open Modal Button */}
      {/* <button
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        onClick={() => setOpenModal(true)}
      >
        Open Modal
      </button> */}

      {/* Modal Overlay */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50  flex justify-center items-center z-50">
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Create a Blog Post</h2>

            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-md mb-3"
              placeholder='Enter Category'
              onChange={(e) => setCategory(e.target.value)}
            />

            <label className="block text-sm font-medium text-gray-700">
              Cover Image
            </label>
            <input type="file" className="w-full p-2 border rounded-md mb-3" 
            onChange={(e) => setCoverImage(e.target.files[0])}/>

            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-md mb-3"
              placeholder='Enter Title'
              onChange={(e) => setTitle(e.target.value)}
            />

            <label className="block text-sm font-medium text-gray-700">
              Content
            </label>
            <textarea className="w-full p-2 border rounded-md mb-3" 
            placeholder='Enter Content'
            onChange={(e) => setContent(e.target.value)}
            />

            {/* Buttons */}
            <div className="flex justify-end space-x-3">
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg"
            onClick={() => handleBlogSubmit()}>
                Submit
              </button>
              <button
                className="px-4 py-2 bg-gray-300 rounded-lg"
                onClick={() => setOpenModal(false)}
              >
                Cancel
              </button>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

