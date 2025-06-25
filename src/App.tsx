import { useEffect, useState } from 'react'

import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Home/Home'

function App() {
  const [count, setCount] = useState(0)
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
