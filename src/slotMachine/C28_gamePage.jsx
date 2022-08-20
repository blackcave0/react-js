import React from 'react'
import '../props/card.css'

const SLOT_MACHINE_FUNCTION =(props)=>{
    /* let x = '😄';
    let y = '😄';
    let z = ' 😄 '; */

    let {x, y, z} = props
    if((x === y) && (y === z)){
        return (
            <>
                <div className='slot_inner'>
                    <h1 >
                        {x} {y} {z}
                    </h1>
                    <h1> This is Matching</h1>
                    <hr />
                </div>
            </>
        )
    } else {
        return (
            <> 
                <div className='slot_inner'>
                    <h1 >
                        {x} {y} {z}
                    </h1>
                    <h1> This is Not Matching</h1>
                    <hr />
                </div>
            </>
        )
    }
}

const C28_gamePage = () => {
    return ( 
        <>
            <h1 className="heading_name">
                🎰 Welcome to {' '}<span style={{fontWeight: 'bold'}}>
                    Slot Machine Game
                </span>
            </h1>

            <div className="slot_machine">
            <SLOT_MACHINE_FUNCTION
                x = '😄'
                y = '😄'
                z = '😄'
            />
            <SLOT_MACHINE_FUNCTION
                x = '😄'
                y = '😄'
                z = '🐰'
            />
            <SLOT_MACHINE_FUNCTION
                x = '😄'
                y = '😄'
                z = '😄'
            />
            <SLOT_MACHINE_FUNCTION
                x = '😄'
                y = '😄'
                z = '😄'
            />

            </div>
        </>
    )
}

export default C28_gamePage