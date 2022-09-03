import React, { useState, useEffect } from 'react'

const UseEffectApp = () => {
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);

    //pass empty array for run one time
    useEffect(()=>alert("I'm Clicked"), [nums])
    
    return (
        <>
            <button
                onClick={() => setNum(num + 1)}
            >
                Click Me = {num}
            </button>
            <br/>
            <br/>
            <button
                onClick={() => setNums(nums + 1)}
            >
                Click Me = {nums}
            </button>
        </>
    )
}

export default UseEffectApp