import React from 'react'
import { useState } from 'react'

const ChallengeHooks = () => {
    let time = new Date().toLocaleTimeString();
    
    const [CURRENT_TIME, UPDATED_TIME_FUNCTION] = useState(time)

    const timeButton =()=>{
        time = new Date().toLocaleTimeString();
        UPDATED_TIME_FUNCTION(time)
    }

    setInterval(timeButton, 1000);

    /* setInterval(() => {
        time = new Date().toLocaleTimeString();
        UPDATED_TIME_FUNCTION(time)
    }, 1000); */
    
    return ( 
        <>
            <h1 style={{textAlign : 'center', marginTop : '10px'}}>{CURRENT_TIME}</h1>
            {/* <button onClick={timeButton}>GET TIME</button> */}
        </>
    )
}

export default ChallengeHooks