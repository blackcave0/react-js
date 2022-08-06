import React from "react";
import './index.css';


const importing_Css = () =>{
    return(
        <>
            <h1 className="heading">Welcome to React-Js</h1>

            <div style={{width:'100%', backgroundColor: '#0e0b16', height: '100vh', color: '#fff', display: 'flex'}}>
                <div style={{margin: '30px 30px'}}>
                    <h1>What is JSX</h1>
                    <p style={{fontFamily : ''}}>
                    It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.
                    </p>
                </div>

            </div>
        </>
    )
}

export default importing_Css