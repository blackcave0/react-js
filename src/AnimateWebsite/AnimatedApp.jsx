import React from 'react'
import Home from './Home'
import { Routes, Route, Navigate } from 'react-router-dom'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Navbar from './Navbar'
import './myStyle.css'
// import Footer from './Footer'
const AnimatedApp = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/service' element={<Service />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<Navigate to='/' />
                } />
                {/* <Home /> */}
            </Routes>
            {/* <Footer/> */}
        </>
    )
}

export default AnimatedApp