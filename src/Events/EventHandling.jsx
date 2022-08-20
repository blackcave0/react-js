import React from 'react'
import { useState } from 'react'
import './center.css'
// '#2C3639'


const EventHandling = () => {
	
	// CHANGING BACKGROUND COLOR
	const tomato = '#FF6347';
	const [CURRENT_BG, UPDATED_BG] = useState(tomato);


	// SHOW TEXT 
	const [CHANGED_TEXT, UPDATED_TEXT] = useState()

	// CHANGING BUTTON 
	const [CHANGE_BUTTON, UPDATED_BUTTON] = useState('Click Me');

	const BCOLOR_CHANGE =()=>{
		UPDATED_BG('#2C3639')

		// SHOW TEXT WHEN BACKGROUND COLOR CHANGED 
		UPDATED_TEXT("background changed")
		/* UPDATED_TEXT(()=>{
			return(
				<>
					<h1>HELLO THIS</h1>
				</>
			)
		}) */

		// CHANGING BUTTON TEXT AND ADDING EMOJI
		UPDATED_BUTTON('impossible 😮')
	}

	const BACKTO_NORMAL = ()=>{
		UPDATED_BG(tomato)
		UPDATED_BUTTON('click me')
		UPDATED_TEXT(null)
	}
	

	return (
		<>
			<div style={{backgroundColor : CURRENT_BG}} className="divCenter">
			<h1 className='heading'>{CHANGED_TEXT}</h1><br />
				<button onMouseEnter={BCOLOR_CHANGE} onMouseLeave={BACKTO_NORMAL}>{CHANGE_BUTTON}</button>
			</div>
		</>
	)
}

export default EventHandling