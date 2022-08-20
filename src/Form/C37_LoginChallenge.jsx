import React, {useState} from 'react'
import ChallengeHooks from '../Hooks/ChallengeHooks';

const C37_LoginChallenge = () => {
    const [FULL_NAME, SET_FULLNAME] = useState({
        fname : '',
        lname : '',
        email : '',
        phone : '',
    });  

    const inputEvent =(event)=>{
        console.log(event.target.value)
        console.log(event.target.name)

        // const value = event.target.value;
        // const name = event.target.name;

        const {value, name} = event.target

        SET_FULLNAME((previousValue)=>{
            console.log(previousValue);
           
            return {
                ...previousValue,
                [name] : value,
            }

            
            // console.log(newObject)
            /* if(name === 'fname') {
                
                return {
                    fname: value,
                    lname : previousValue.lname,
                    email : previousValue.email,
                    phone : previousValue.phone, 

                }
            } 
            else if (name === 'lname') {
                return {
                    fname : previousValue.fname,
                    lname : value,
                    email : previousValue.email,
                    phone : previousValue.phone,
                }
            }
            else if (name === 'email') {
                return {
                    fname : previousValue.fname,
                    lname : previousValue.lname,
                    email : value,
                    phone : previousValue.phone,
                }
            }
            else if (name === 'phone') {
                return {
                    fname : previousValue.fname,
                    lname : previousValue.lname,
                    email : previousValue.email,
                    phone : value,
                }
            } 
            */
        })
    }

    var a = {
        cName : 'Js',
        fname : "rJs"
    }

    var b = {...a}
    a.cName = 'dart'
    // it can be modify original Object 
    console.log(a)

    // but this not 
    console.log(b)

    
    const onSubmit =(e)=>{
        // adding this line to remove auto refresh 
        e.preventDefault()
        alert('form submited!')
    }
    
    return ( 
        <>
            <h1 className="heading_style">Login Form Challenge</h1>
            <ChallengeHooks/>

            <div className='main_div'>
                <form action="" className="divCenter" onSubmit={onSubmit}>
                    <h1 className='formHeading'> 
                        {FULL_NAME.fname} {FULL_NAME.lname}
                    </h1>
                    <h4>{FULL_NAME.email}</h4>
                    <h4>{FULL_NAME.phone}</h4>
                    <input 
                        type="text" 
                        placeholder='Enter Your Name' 
                        value={FULL_NAME.fname} 
                        onChange={inputEvent} 
                        name='fname'
                        autoComplete='of'
                    /><br />

                    <input 
                        type="text" 
                        placeholder='Enter Your Last Name' 
                        value={FULL_NAME.lname} 
                        onChange={inputEvent} 
                        name='lname'
                        autoComplete='of'
                    /><br />

                    <input 
                        type="email" 
                        placeholder='Enter Your Email-Id' 
                        value={FULL_NAME.email} 
                        onChange={inputEvent} 
                        name='email'
                        autoComplete='of'
                    /><br />

                    <input 
                        type="number" 
                        placeholder='Enter Your Phone No.' 
                        value={FULL_NAME.phone} 
                        onChange={inputEvent} 
                        name='phone'
                        autoComplete='of'
                    /><br />

                    {/* CHANGING SOME VALUE  */}
                    <button type='submit'>Click me</button>
                </form>
            </div>
            
        </>
    )
}

export default C37_LoginChallenge