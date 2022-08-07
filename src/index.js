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
import App from './App'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <App/>
)