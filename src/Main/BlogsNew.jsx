import React, { useEffect } from 'react'
import { BlogsModal } from './BlogsNew-componenets/BlogsModal'
import { useState } from 'react'

function BlogsNew() {
    const [openModal, setOpenModal] = useState(false);

    const [blogs, setBlogs] = useState({
      author : "no author",
      blogs : [{
        category : "no category",
        coverImage : "no image",
        title : "no title",
        content : "no content",
        createdAt : new Date(),
      }]
    });
   
    const getAllBlogs = async () => { 
      
      try {
        const res = await fetch('http://localhost:3000/blogs', {
          credentials: 'include'
        });
        const data = await res.json();

        if (!data) {
          return alert('no blogs found');
        }
       
        setBlogs({
          author : data.author,
          blogs : data.blogs.map((blog)=>{
            return {
              category : blog.category,
              coverImage : blog.coverImage,
              title : blog.title,
              content : blog.content,
              createdAt : blog.createdAt,
            };
          }),
        });
        
        console.log(data);
      } catch (error) {
        console.error("can't get all blogs");
      }
    };

    

    useEffect(() => {
      getAllBlogs();
    }, []);

    
    <div className='min-h-screen bg-gray-100'>

        <nav className="flex justify-between items-center bg-gray-100 p-4 shadow-md gap-4 ">
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
              onClick={() => setOpenModal(true)}>
              Write Blog
            </button>
          </div>
        </nav>
     <BlogsModal openModal={openModal} setOpenModal={setOpenModal}/>  

     <main>
      {blogs.blogs.map((blog, index) => (
        <div key={index}>
          <h2>{blog.title}</h2>
          <p>{blog.category}</p>
          <p>{blog.createdAt}</p>
          <img src={blog.coverImage} alt={blog.title} />
          <p>{blog.content}</p>
        </div>
      ))}
     </main>
    </div>
    
  
}

export default BlogsNew