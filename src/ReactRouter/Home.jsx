import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { Outlet } from 'react-router-dom'
const Home = () => {

    // to use navigate redirect page to another page 
    const navigate = useNavigate();
    const gotoAbout =()=>{
        // alert('clicked')
        navigate('/about')
    }

    return (
        <>
            <section>
                <h1>Im home page</h1>
            </section>
            <button onClick={() => gotoAbout()}>go to about</button>
            {/* <Outlet /> */}
        </>
    )
}

export default Home