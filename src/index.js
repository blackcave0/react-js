//! THIS IS FOR OLDER VERSION => 17

/* import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
    <>
        <App />
    </>,
    document.getElementById('root')
) */


//* THIS METHOD FOR NEWVER VERSION => 18

import React from 'react';
import { createRoot } from 'react-dom/client';
import AnimatedApp from './AnimateWebsite/AnimatedApp';
// import App from './App'
// import './style.css'


//------------------------------
//:: ## ANIMATED WEBSITE 
import { BrowserRouter } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
//------------------------------


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    // <App/>
    <BrowserRouter>
        <AnimatedApp/>
    </BrowserRouter>
)