import React from 'react'

const ShowData = ({stateName, population, woman, man,id}) => {
    return (
        <>
            {/* <div className="project_center_div"> */}
                <div className="project_main_div">
                    <h1>{stateName}</h1>
                    <h3>{population}</h3>
                    <h4>{woman}</h4>
                    <h4>{man}</h4>
                </div><hr />
            {/* </div> */}
        </>
    )
}

export default ShowData