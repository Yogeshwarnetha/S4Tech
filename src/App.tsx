import './App.css'
import Navbar from './navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer'
import Home from './components/Home'
import AboutUs from './components/Aboutus'
import ContactUs from './components/Contactus'
import BlogList from './components/Blog'
import Services from './components/services'

function App() {

  return (
    <>
   
     <Navbar/>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/blogs' element={<BlogList/>}/>
        <Route path='/services' element={<Services/>}/>



      </Routes>
     </BrowserRouter>
     <Footer/>
    </>
  )
}

export default App
