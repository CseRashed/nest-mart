import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home/Home'
import Navbar from './Layout/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Layout/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
<Outlet></Outlet>
<Footer></Footer>

    </>
  )
}

export default App
