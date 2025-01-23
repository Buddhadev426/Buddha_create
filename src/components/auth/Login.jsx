
import React from 'react'
import { useState } from 'react'


function Login() {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();
  
  const res = await fetch ("http://localhost:3000/login", 
    {
    method: "POST",
   headers: {
     "Content-Type": "application/json",
   },
    
    body: JSON.stringify({email, password}),
  })
  // console.log(JSON.stringify({email, password}));
  const data = await res.json();
  console.log(data);
};



  return (

    <div className="h-screen flex justify-end items-center bg-no-repeat bg-center bg-cover pr-20" style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/illustration-concept-blogging-with-pencil-holder-side-computer_129685-291.jpg')" }}>
      <div className="w-[400px] h-[600px] bg-blue-950 flex-col  ">
        <div><h1 className='text-2xl text-white pt-4 text-center'>Welcome To Blogs</h1></div>
      <div className=' text-white  text-sm/6 font-semibold text-indigo-600 pt-8 text-center'>Please login to access your account.
        
      </div>
    <form onSubmit={handleSubmit}>
      <div className='pl-8 pt-8'><label htmlFor="" className="text-white ">User Name</label></div>
        <div className='flex justify-center pt-1'>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className=' p-3 w-[350px] h-[40px] rounded-full outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
     <div className='pl-8 pt-8'><label htmlFor="" className="text-white ">Password</label></div>
       <div className='flex justify-center pt-1'>
        <input 
          type="password" 
          id="password" 
          name="password" 
          className='p-3 w-[350px] h-[40px] rounded-full outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
          onChange={(e) => setPassword(e.target.value)}
        />
    </div>
        <div className='flex justify-center'>
          <button className='bg-red-600 text-white w-[350px] h-[40px] rounded-full mt-8'>Login
          </button>
        </div>
   </form>
        <div className='flex justify-center justify-between pl-8 pr-8'>
          <div className='flex pt-4 text-white  text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500 underline'><link rel="stylesheet" href="" />Forgot Password</div>
          <div className='flex pt-4 text-white  text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500 underline'><link rel="stylesheet" href="" />Privacy Policy</div>
        </div>
        <div className=' text-white  text-sm/6 font-semibold text-indigo-600 pt-8 text-center'>
          Don't have an account? <a href=" http://localhost:5173/Register" className='underline hover:text-indigo-500'>
            Sign Up</a>
          </div>
        <div className=' text-white  text-sm/6 font-semibold text-indigo-600 pt-8 text-center'>Or sign in with an account.
        </div>

        <div className="flex gap-4 justify-center pt-4">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer ">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google Logo" className="h-12 w-12  " />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" className="h-8 w-8 rounded-full" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook Logo" className="h-8 w-8" />
          </a>
          
        <div>
          
        </div>
        </div>
      </div>
      
    </div>

  )
}


export default Login
