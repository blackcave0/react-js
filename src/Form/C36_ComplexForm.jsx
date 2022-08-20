// HANDLING COMPLEX MULTIPLE INPUT 

import React, {useState} from 'react'
import ChallengeHooks from '../Hooks/ChallengeHooks'

const C36_ComplexForm = () => {
    const [FULL_NAME, SET_FULLNAME] = useState({
        fname : '',
        lname : '',
    });   
    
    const inputEvent =(event)=>{
        console.log(event.target.value)
        console.log(event.target.name)

        const value = event.target.value;
        const name = event.target.name;

        /* SET_FULLNAME((previous_value)=>{
            console.log(previous_value);
            return (name === 'fname') ? {fname : value} : {lname : previous_value.lname} (name === 'lname') ? {fname : previous_value.fname} : {lname : name}
        }) */

        /* SET_FULLNAME((preValue) =>{
            return (name === 'fname') ? {fname} : {value} : {fname : preValue.lname}  
            (name === 'lname') ? {fname : preValue.fname} : {lname : value}
        }) */

        SET_FULLNAME((pValue)=>{
            console.log(pValue);
            if(name === 'fname') {
                return {
                    fname: value,
                    lname : pValue.lname
                }
            } else if (name === 'lname') {
                return {
                    fname : pValue.fname,
                    lname : value
                }
            }
        })
    }


    const onSubmit =(e)=>{
        // adding this line to remove auto refresh 
        e.preventDefault()
        alert('form submited!')
    }
    
    return ( 
        <>
            <h1 className="heading_style">complex multiple input</h1>
            <ChallengeHooks/>


            <div className='main_div'>
                <form action="" className="divCenter" onSubmit={onSubmit}>
                    <h1 className='formHeading'> 
                        {FULL_NAME.fname}
                        {FULL_NAME.lname}
                    </h1>

                    <input 
                        type="text" 
                        placeholder='Enter Your Name' 
                        value={FULL_NAME.fname} 
                        onChange={inputEvent} 
                        name='fname'
                    /><br />

                    <input 
                        type="text" 
                        placeholder='Enter Your Last Name' 
                        value={FULL_NAME.lname} 
                        onChange={inputEvent} 
                        name='lname'
                    /><br />

                    {/* CHANGING SOME VALUE  */}
                    <button type='submit'>Click me</button>
                </form>
            </div>
        </>
    )
}

export default C36_ComplexForm