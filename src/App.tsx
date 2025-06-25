import { useEffect } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'

function App() {
  useEffect(() => {
    // Reset scroll position
    const scrollY = window.scrollY
    window.scrollTo(0, scrollY);
    // Prevent horizontal scrolling
    document.body.style.overflowX = 'hidden';
  },[]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </>
  )
}

export default App
