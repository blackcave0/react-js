import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = (props) => {
    const navigate = useNavigate();
    const home =()=>{
        // navigate(window.open('https://google.com', 'blank'))
        navigate('/')
    }
    return (
        <>
            <h1>
                Hi I'm {props.name} page
            </h1>
            <button onClick={home}>goto home</button>
            <button onClick={()=> navigate(-1)}>go previous page</button>
        </>
    )
}

export default About