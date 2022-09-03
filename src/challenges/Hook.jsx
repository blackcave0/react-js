import React, { useState, useEffect } from 'react'


// CHANGING TITE VALUE ON CLICK
const Hook = () => {
    const [value, setValue] = useState(1);

    useEffect(()=>{
        // document.title = value
        document.title = `Clicked ${value}`
    })
    
    return (
        <>
            <button onClick={()=> setValue(value+1)}>Click Me {value}</button>
        </>
    )
}

export default Hook