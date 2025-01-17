// export default function Login() {
//     return (
//       <>
//         {/*
//           This example requires updating your template:
  
//           ```
//           <html class="h-full bg-white">
//           <body class="h-full">
//           ```
//         */}
//         <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//           <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//             <img
//               alt="Your Company"
//               src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
//               className="mx-auto h-10 w-auto"
//             />
//             <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
//               Sign in to your account
//             </h2>
//           </div>
  
//           <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//             <form action="#" method="POST" className="space-y-6">
//               <div>
//                 <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
//                   Email address
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     required
//                     autoComplete="email"
//                     className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                   />
//                 </div>
//               </div>
  
//               <div>
//                 <div className="flex items-center justify-between">
//                   <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
//                     Password
//                   </label>
//                   <div className="text-sm">
//                     <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
//                       Forgot password?
//                     </a>
//                   </div>
//                 </div>
//                 <div className="mt-2">
//                   <input
//                     id="password"
//                     name="password"
//                     type="password"
//                     required
//                     autoComplete="current-password"
//                     className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                   />
//                 </div>
//               </div>
  
//               <div>
//                 <button
//                   type="submit"
//                   className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                 >
//                   Sign in
//                 </button>
//               </div>
//             </form>
  
//             <p className="mt-10 text-center text-sm/6 text-gray-500">
//               Not a member?{' '}
//               <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
//                 Start a 14 day free trial
//               </a>
//             </p>
//           </div>
//         </div>
//       </>
//     )
//   }


import React from 'react'


function Login() {
  return (

    <div className="h-screen flex justify-end items-center bg-no-repeat bg-center bg-cover pr-20" style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/illustration-concept-blogging-with-pencil-holder-side-computer_129685-291.jpg')" }}>
      <div className="w-[400px] h-[550px] bg-blue-950 flex-col  ">
        <div><h1 className='text-2xl text-white pt-4 text-center'>Welcome To Blogs</h1></div>
        <div className=' text-white  text-sm/6 font-semibold text-indigo-600 pt-8 text-center'>Please login to access your account.</div>
        <div className='pl-8 pt-8'><label htmlFor="" className="text-white ">User Name</label></div>
        <div className='flex justify-center pt-1'><input type="email" className='w-[350px] h-[40px] rounded-full outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'/></div>
        <div className='pl-8 pt-8'><label htmlFor="" className="text-white ">Password</label></div>
        <div className='flex justify-center pt-1'><input type="password" className='w-[350px] h-[40px] rounded-full outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'/></div>
        <div className='flex justify-center'><button className='bg-red-600 text-white w-[350px] h-[40px] rounded-full mt-8'>Login</button></div>
        <div className='flex justify-center justify-between pl-8 pr-8'>
          <div className='flex pt-4 text-white  text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500 underline'><link rel="stylesheet" href="" />Forgot Password</div>
          <div className='flex pt-4 text-white  text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500 underline'><link rel="stylesheet" href="" />Privacy Policy</div>
        </div>
        <div className=' text-white  text-sm/6 font-semibold text-indigo-600 pt-8 text-center'>Or sign in with an account.</div>

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
