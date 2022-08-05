import React from 'react'

const App =()=>{
    var fruitName = ["Mango 🥭", "Grapes 🍇"]
    return(
        <>
            <h1>Welcome to react Js Series</h1>
            {
                fruitName.forEach(element => {

                })
            }
        </>
    )
}

export const CheckFun =()=>{
    return(
        <>
            <ul>
                <li>Check 1</li>
                <li>Check 2</li>
                <li>Check 3</li>
                <li>Check 4</li>
            </ul>
        </>
    )
}
export default App;