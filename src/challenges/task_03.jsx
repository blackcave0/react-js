import React from 'react'

const tast03 =()=>{
    // let curDate = new Date(2022, 8,6, 13)
    let curDate = new Date()
    curDate = curDate.getHours()
    let greeting = '';
    const cssStyle = {fontSize : '40px'}

    if(curDate >=5 && curDate < 12) {
        greeting = 'Good Morning 😄'
        cssStyle.color = "green"
    } else if (curDate >=12 && curDate < 19) {
        greeting = 'Good Afternoon 😫'
        cssStyle.color = "Orange"
    } else if(curDate >= 1 && curDate < 5 ){
        greeting = 'Coding 👨‍💻'
        cssStyle.color = 'blue '
    } else {
        greeting = 'Good Night 😴'
        cssStyle.color = 'black '
    }
    return(
        <>
            <h1>Task 03</h1>
            <h3>
                Hello Sir, <span style={cssStyle}>{greeting}</span>
            </h3>
        </>
    )
}
export default tast03