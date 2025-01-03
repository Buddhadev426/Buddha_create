import React from 'react'
import Hero from './Main/Hero'
import Pricing from './Main/Pricing'
import GeminiEffect from './Main/GeminiEffect'
import Lamp from './Main/Lamp'
import ScrollingEffect from './Main/ScrollingEffect'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './components/Navbar'



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Pricing />
      <GeminiEffect />
      <Lamp />
      <ScrollingEffect />

    </div>
   
  )
}

export default App