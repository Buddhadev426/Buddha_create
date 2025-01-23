import React from 'react'
import Hero from './Main/Hero'
import Pricing from './Main/Pricing'
import GeminiEffect from './Main/GeminiEffect'
import Lamp from './Main/Lamp'
import ScrollingEffect from './Main/ScrollingEffect'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './Main/About'
import FinfFriendHeader from './components/FinfFriendHeader'
import Services from './Main/Services'
import DataFlowProvider from './Context/Dataflow'
import Contact from './Main/Contact'
import Weather from './Main/Weather'
import Dashboard from './components/Dashboard'
import PrivetRout from './Privet-roouts/PrivetRout'
import Login from './components/auth/Login'
import NavbarBlog from './Blogs/NavbarBlog'
import FeaturedBlogPost from './Blogs/FeaturedBlogPost'
import TrendingBlogPost from './Blogs/TrendingBlogPost'
import Categories from './Blogs/Categories'
import FooterBlog from './Blogs/FooterBlog'
import Registration from './components/auth/Registration'








const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
       <div>
       <Navbar />
      <Hero />
      <Pricing />
      <GeminiEffect />
      <Lamp />
      <ScrollingEffect />
      
        
       </div>
      ),
      errorElement: (
        <div>
          sorry page not found
          <link to={'/'} className='text-blue-500 underline'>
            Go back   
            </link>
        </div>
      )
    },
    {
      path: '/About',
      element: (
       <div>
        <FinfFriendHeader />
       <About />
       </div>
      )
    },
    {
      path: '/Services',
      element: (
       <div>
       <Services>
        <h1>Hi, this is services</h1>

       </Services>
       </div>
      )
    },
    {
      path: '/Contact',
      element: (
       <div>
       <Contact />  
       </div>
      )
    },
    {
      path: '/Weather',
      element: (
       <div>
        
       <Weather/>
       </div>
      )
    },
    {
      path: '/Blog',
      element: (
       <div>
        
       <NavbarBlog/>
       <FeaturedBlogPost/> 
       <TrendingBlogPost/>
       <Categories/>
       <FooterBlog/>  
       
       </div>
      )
    },
    
    {
      path: '/Login',
      element: (
       <div>
        
       <Login/>
       </div>
      )
    },
    {
      path: '/Register',
      element: (
       <div>
        
       <Registration/>
       </div>
      )
    },
    {
      path: '/Dashboard',
      element: (
       <PrivetRout>
       <Dashboard/>
       </PrivetRout>
      )
    },
   
   
   
  ])
    return (
      <div>

      <DataFlowProvider>
        <RouterProvider router={router} />  
        
      </DataFlowProvider>
      </div>
    )
  }
  
  export default App