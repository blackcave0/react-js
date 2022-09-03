import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UseParamHooks from './UseParamHooks'
import Menu from './Menu'
import UserDetails from './UserDetails'

const ParamsApp = () => {
    return (
        <>
            <Menu/>
            <Routes>
                <Route path='/' element={<UseParamHooks/>} />
                <Route path='/user' element={<UserDetails/>} exact/>
                {/* <Route path='/user/:fname/:lname' element={<UserDetails/>}/> */}
                <Route path='/user/:fname/:lname' element={<UserDetails/>}/>
            </Routes>
        </>
    )
}

export default ParamsApp