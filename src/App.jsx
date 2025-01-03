import React from 'react'
import Hero from './Main/Hero'
import Pricing from './Main/Pricing'
import GeminiEffect from './Main/GeminiEffect'
import Lamp from './Main/Lamp'
import ScrollingEffect from './Main/ScrollingEffect'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './Main/About'





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
       <About />
        
       </div>
      )
    },
   
   
  ])
    return (
      <div>
        <RouterProvider router={router} />  
      </div>
    )
  }
  
  export default App