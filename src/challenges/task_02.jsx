import React from 'react'

const task_02 = () => {
    const date = new Date().toLocaleString()
    const time = new Date().toLocaleTimeString()
    return (
       <>
            <h1 dir='RTL'>Rudraksh Srivastava</h1>
            <p>Current Date = {date}</p>
            <p>Current Time = {time}</p>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14230.19489970222!2d80.92852791849367!3d26.917813548041565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x49995643672297cd%3A0x2a203434fd8f03b9!2sRamleela%20Maidan!5e0!3m2!1sen!2sin!4v1659656986176!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" /> */}
            
            <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14230.19489970222!2d80.92852791849367!3d26.  917813548041565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x49995643672297cd%3A0x2a203434fd8f03b9!2sRamleela%20Maidan!5e0!3m2!1sen!2sin!4v1659656986176!5m2!1sen!2sin'  title='Map' width='600' height='500' />
       </>     
    )
}

export default task_02