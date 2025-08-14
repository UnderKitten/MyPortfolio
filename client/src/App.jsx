import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Home  from './Pages/Home'
import  Projects  from './Pages/Projects'
import  About  from './Pages/About'
import  Resume  from './Pages/Resume'
import  NotFound  from './Pages/NotFound'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>  
    </>
  )
}

export default App