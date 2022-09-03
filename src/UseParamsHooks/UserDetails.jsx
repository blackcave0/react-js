import React from 'react'
import { unstable_HistoryRouter, useLocation, useParams} from 'react-router-dom'


const UserDetails = () => {
    const {fname,lname} = useParams();
    const location = useLocation();
    const histry = unstable_HistoryRouter()
    console.log(histry)
    return (
        <>
        
            <h1>
              I'm {fname} User Details Page {lname}
            </h1>
            <p>loction  
                { location.pathname}
            </p>
            {location.pathname  === `/user/ranu/sri` ? (
                <button onClick={()=> histry.goBack()}>Go Back</button>
            ): null}
        </>
    )
}

export default UserDetails