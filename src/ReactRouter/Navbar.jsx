import React from 'react'
import { NavLink, } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const Navbar = () => {
    
    return (
        <>
            {/* <Link to='/'>About Us</Link> */}
            {/* <Link to='/contact'>Contact Us</Link> */}

            <div className="navbar__menu">
                <NavLink className='btn_links' to='/'>Home </NavLink> 
                <NavLink className='btn_links'  to='/about'>About Us</NavLink>
                <NavLink className='btn_links' to='/contact'>Contact Us</NavLink>
                {/* <NavLink className='btn_links' to='/contact'
                onClick={()=> {window.open('https://www.google.com', 'blank')}}
                >Contact Us</NavLink> */}
              
            </div> 

            
        </>
    )
}

export default Navbar