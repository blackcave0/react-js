import React from 'react'
import { NavLink } from 'react-router-dom'
const Menu = () => {
    return (
        <>
            <div className="navbar__menu">
                <NavLink className='btn_links' to='/'>Home</NavLink>
                <NavLink className='btn_links' to='/user'>UserDetails</NavLink>
            </div>
        </>
    )
}

export default Menu