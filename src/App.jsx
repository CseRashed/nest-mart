import './App.css'
import Home from './Pages/Home/Home'
import Navbar from './Layout/Navbar/Navbar'
import Footer from './Layout/Footer/Footer'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <>
    <Navbar></Navbar>
    <div className='my-5 md:my-10 lg:my-10'>
      <Outlet></Outlet>
    </div>
    <Footer></Footer>

    </>
  )
}

export default App
