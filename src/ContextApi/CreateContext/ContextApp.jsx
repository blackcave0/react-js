import React, { createContext } from 'react'
import ComA from './ComA'


//## CREATE CONTEXT

// FOR PASSING DATA ONLY TO C COMPONENT
const FristName = createContext();
const LastName = createContext();

const ContextApp = () => {
    return (
        <>
            <h1>Context Api</h1>
            {/* 
                # FOR PASSING DATA
                //! createContext() 

                # PROVIDAR

                # CONSUMER
            */}

            <FristName.Provider value={'MY FRIST NAME'}>
                <LastName.Provider value={'MY LAST NAME'}>

                <ComA/>
                </LastName.Provider >
                {/* <ComA/> */}
            </FristName.Provider>
        </>
    )
}

export default ContextApp
export {FristName, LastName}