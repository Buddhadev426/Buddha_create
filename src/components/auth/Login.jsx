import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { th } from 'framer-motion/client';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toastError, setToastError] = useState(false);
  const [successLogin, setSuccessLogin] = useState(false);
  const [ showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/login', {   
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      if (res.ok === true) {
        setSuccessLogin(true);
        navigate('/Blog');
      } else {
        setToastError(true);
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div
      className="h-screen flex justify-center items-center bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU_RQssmFSVw9CfnW3W3jo8zGBldfsYUBHKg&s')" }}
    >
      <div className="w-[400px] h-[600px] bg-blue-950 flex flex-col p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl text-white text-center font-bold">Welcome To Blogs</h1>
        <p className="text-white text-sm font-semibold text-center mt-4">Please login to access your account.</p>
        
           {toastError === true ? (
        <div className="bg-red-300 text-red-600 text-center p-2 mt-4 rounded font-semibold">
            Invalid credentials
        </div>) : ( 
            "" 
           )}

           {successLogin === true ? (
        <div className="bg-green-300 text-green-600 text-center p-2 mt-4 rounded font-semibold">
          Successfully logged in
        </div>) : ( 
          "" 
         )}


        <form onSubmit={handleSubmit} className="mt-6">
          <div>
            <label htmlFor="email" className="text-white">User Name</label>
          </div>
          <div className="mb-4">           
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Enter your email'
              className="block w-full p-2 pl-4 mt-1 rounded-full outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
             <label htmlFor="password" className="text-white">Password</label>
          </div>
          <div className="mb-4 relative">            
            <input
              type={showPassword === true ? "text" : "password"}
              id="password"
              name="password"
              placeholder='Enter your Password'
              className="block w-full p-2 pl-4 mt-1 rounded-full outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
              onChange={(e) => setPassword(e.target.value)}
            />
            {
             showPassword === true ? (
               <FaEye className='absolute right-3 top-3' onClick={() => setShowPassword(false)}/>
                  ) : (
              <FaEyeSlash className='absolute right-3 top-3' onClick={() => setShowPassword(true )} />
                )}
          </div>

          <button className="bg-red-600 text-white w-full p-2 rounded-full mt-4 hover:bg-red-500">Login</button>
        </form>

        <div className="flex justify-between mt-4 text-white text-sm p-2">
          <a href="#" className="hover:text-indigo-500 underline ">Forgot Password</a>
          <a href="#" className="hover:text-indigo-500 underline">Privacy Policy</a>
        </div>

        <p className="text-white text-sm text-center mt-6">
          Don't have an account? <Link to="/Register" className="underline hover:text-indigo-500">Sign Up</Link>
        </p>
        
        <p className="text-white text-sm text-center mt-6">Or sign in with an account.</p>
        <div className="flex justify-center gap-6 mt-4">
          <FontAwesomeIcon icon={faFacebook} className="text-white hover:text-blue-500 cursor-pointer text-3xl" />
          <FontAwesomeIcon icon={faGithub} className="text-white hover:text-gray-500 cursor-pointer text-3xl" />
          <FontAwesomeIcon icon={faGoogle} className="text-white hover:text-red-500 cursor-pointer text-3xl" />
        </div>
      </div>
    </div>
  );
}

export default Login;