import React, { useState } from 'react'

const Hooks = () => {
    /* 
    // ARRAY DESTRUCTURING 
    const ARRAY_NAME = ['FNAME', 'MNAME', 'LNAME'];
    // console.log(ARRAY_NAME[0]); // wrong method
    
    const [FNAME, MNAME, LNAME] = ARRAY_NAME;
    console.log(FNAME) 
    */

   //* ## CREATING HOOKS
//    const state = useState()

   const [count, SET_COUNT_FUNCTION] = useState(0);
   // ## CREATE FUNCTION FOR INCREAMENT NUMBER
   // let count = 1;
   const INCE_NUM = () => {
       SET_COUNT_FUNCTION(count -1);
       // console.log('clicked')
   }
   
   return (
       <>
           <h1>{count}</h1>
           <button onClick={INCE_NUM}>Click Me</button>
       </>
   )
}

export default Hooks