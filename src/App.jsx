import './App.css'
import Home from './Pages/Home/Home'
import Navbar from './Layout/Navbar/Navbar'
import Footer from './Layout/Footer/Footer'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>

    </>
  )
}

export default App
