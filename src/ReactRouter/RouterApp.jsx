import React from 'react'

import About from './About'
import { Route, Routes, Navigate } from 'react-router-dom'
import Contact from './Contact'
import ErrorPage from './ErrorPage'
import Navbar from './Navbar'
import Home from './Home'

// This is main app
const RouterApp = () => {
    const Name = () => {
        return <h1>Hello this is name page</h1>
    }

    const userId = true;
    // const urls =new  URL('https://www.google.com')
    return (
        <>
            <Navbar />
            {/* <Routes> */}
                {/* THIS IS HOME PAGE = / */}
                {/* <Route exact={true} path='/' element={<h1>This is our home</h1>} /> */}
                {/* <Route exact path='/about' element={<About />} /> */}

                {/* <Route exact path='/' element={<About name={'About us'}/>}/> */}
                {/* <Route path='/contact' element={<Contact name={'Contact us'} />} /> */}
                {/* <Route path='/contact/name' element={<Name />} /> */}
                {/* <Route path='*' element={<ErrorPage />} /> */}
            {/* </Routes> */}
            {/* <h1>This is main page</h1> */}


            {/* //:: NASTED ROUTES  */}
            <Routes>
                <Route>
                    {/* THIS IS HOME PAGE = / */}
                    <Route path='/' element={<Home />} />
                    <Route exact path='/about' element={<About name={'about'}/>} />

                    {/* <Route exact path='/' element={<About name={'About us'}/>}/> */}
                    <Route path='/contact' element={<Contact name={'Contact us'} />} />
                    <Route path='/contact/name' element={<Name />} />
                    <Route path='*' element={<ErrorPage />} />

                    {/* <Route path='/' element={<Navigate to='/' replace={true} />}/> */}
                    {/* <Route path='*' element={userId ? (<Navigate replace to='/'/>) :( <About/>)} /> */}
                </Route>
                
            </Routes>

        </>
    )
}

export default RouterApp