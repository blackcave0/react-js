import React from 'react'
// import favFood, {txtDeco} from './c20_modulesImpExp'
import * as allCompo from './c20_modulesImpExp'
const c18_functionalComp = () => {
    const name = ['Mango 🥭', 'Grapes 🍇', 'Waterlemon 🍉']
    /* name.forEach(fruits=>{
        allName += fruits
    }) */
    var a =name.map(function(e){
        return e + 'Juicy, '
    });
    let allName = a

    // a+=allName
    console.log(allName)

    // const randomNum = Math.floor(Math.random())
    // const randomNum = Math.random().toFixed(2)
    // var randomNum = Math.floor(1.8)

    
    return ( 
        <>
            <h1 className='heading'>Functional Component</h1>
            <h3 style={allCompo.txtDeco}>{allCompo.default}</h3>
            <p style={allCompo.txtDeco}>{allName}</p>
            {/* <h4>{randomNum}</h4> */}
        </>
        
    )
}

export default c18_functionalComp
