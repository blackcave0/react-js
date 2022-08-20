import React, {useState} from 'react'

const ControlledForm = () => {
    
    // Live Value Show in H1 tag 
    const [displayValue, inputValue] = useState();    const inputEvent =(event)=>{
        console.log(event.target.value)
        inputValue(event.target.value)
    }

    // Button Click then show value in H1 Tag
    const [MY_FULLNAME, SET_FULLNAME] = useState();

    // Adding Emoji After FullName 
    const [showEmoji, addEmoji] = useState();

    const onSubmit =()=>{
        SET_FULLNAME(displayValue)
        addEmoji('😎')
    }
    
    return (
        <>
            <h1 className="heading_style">controlled form </h1>
            <div className="divCenter">
                <h1 className='formHeading'> 🌻 {MY_FULLNAME} {showEmoji}</h1><br />

                <input type="text" placeholder='Enter Your Name' value={displayValue} onChange={inputEvent}/>

                <button onClick={onSubmit}>Click me</button>
            </div>
        </>
    )
}

export default ControlledForm