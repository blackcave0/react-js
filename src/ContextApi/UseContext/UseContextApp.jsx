import React, {createContext} from 'react'
import UcomA from './UcomA';

// FOR PASSING DATA ONLY TO C COMPONENT
const FristName = createContext();
const LastName = createContext();
const UseContextApp = () => {
    return (
        <>
        <FristName.Provider value={'MY FRIST NAME'}>
                <LastName.Provider value={'MY LAST NAME'}>
                <UcomA/>
                </LastName.Provider >
                {/* <ComA/> */}
            </FristName.Provider>

        </>
    )
}

export default UseContextApp
export {FristName, LastName}