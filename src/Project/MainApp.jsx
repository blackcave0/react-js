import React from 'react'
import { useState } from 'react'
import { stateData, districtData } from './dataApi'
import ShowData  from './ShowData'

const MainApp = () => {
    const [getData, setData] = useState([]);
    // const [finalData, setFinalData] = useState('')

    const imgClick = () => {
        // alert('clicked') 
        setData(stateData)
    }

    const [getDistrictData, setDistrictData] = useState([]);
    const newImgClick =()=>{
        setDistrictData(districtData)
    }
    
    return (
        <>
            <h1 className="heading_style">state vise data</h1>
            <div className="project_center_div">
                <img 
                    src="https://images.unsplash.com/photo-1525011268546-bf3f9b007f6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="click-img"
                    onClick={imgClick}
                />
                <img 
                    src="https://images.unsplash.com/photo-1525081905268-fc0b46e9d786?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                    alt="click-img" 
                    onClick={newImgClick}
                />

                {
                    //
                    getData.map((value, index) => {
                        const { id } = value
                        return (
                            <ShowData
                                /* stateName={value.stateName}
                                populatioData={value.population}
                                womanData={value.woman}
                                manData={value.man} */
                                key={id}
                                {...value}
                            />
                        )
                    })

                }

                {
                    getDistrictData.map((value, index) => {
                        const { id } = value
                        return (
                            <ShowData
                                /* stateName={value.stateName}
                                populatioData={value.population}
                                womanData={value.woman}
                                manData={value.man} */
                                key={id}
                                {...value}
                            />
                        )
                    })
                }
            </div>


        </>
    )
}

export default MainApp