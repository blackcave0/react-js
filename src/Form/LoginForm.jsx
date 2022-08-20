import React, {useState} from 'react'
// import C30hooksApp from '../Hooks/C30_hooksApp';
import ChallengeHooks from '../Hooks/ChallengeHooks';

const LoginForm = () => {
    // Live Value Show in H1 tag 
    // FOR FIRST NAME 
    const [displayValue, inputValue] = useState('');   
    const inputEvent =(event)=>{
        console.log(event.target.value)
        inputValue(event.target.value)
    }

    // FOR LAST NAME
    const [displayValue_lastName, inputValue_lastName] = useState('');
    const inputEvent_lastName =(e)=>{
        inputValue_lastName(e.target.value)
    }

    // Button Click then show value in H1 Tag
    const [MY_FULLNAME, SET_FULLNAME] = useState('');
    const [MY_LASTNAME, SET_LASTNAME] = useState('');

    // Adding Emoji After FullName 
    // const [showEmoji, addEmoji] = useState("");

    // CHANGING DEFAULT BEHAVIOUR OF FORM AUTO REFRESH
    const onSubmit =(e)=>{
        // adding this line to remove auto refresh 
        e.preventDefault()

        SET_FULLNAME(displayValue)
        // addEmoji('😎')

        SET_LASTNAME(displayValue_lastName)
    }

    return (
        <>
            <h1 className="heading_style">login form</h1>
            <ChallengeHooks/>

            <div className='main_div'>
                <form action="" className="divCenter" onSubmit={onSubmit}>
                    <h1 className='formHeading'> {MY_FULLNAME}  {MY_LASTNAME} {/* {showEmoji} */}</h1>

                    <input type="text" placeholder='Enter Your Name' value={displayValue} onChange={inputEvent}/><br />

                    <input type="text" placeholder='Enter Your Last Name' value={displayValue_lastName} onChange={inputEvent_lastName}/><br />

                    {/* CHANGING SOME VALUE  */}
                    <button type='submit'>Click me</button>
                </form>
            </div>
        </>
    )
}

export default LoginForm