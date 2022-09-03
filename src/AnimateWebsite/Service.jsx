import React from 'react'
import Card from './Card'
import { DataCard } from './DataCard'

// ## THIS COMPONET FOR CARD
const Service = () => {
    return (
        <>
            <div className="my-5">
                <div className="text-center">
                    <h1>Our Services</h1>
                </div>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-5">
                            {
                                DataCard.map((value, index) =>{
                                    return (
                                        <Card
                                            imgsrc={value.imgsrc}
                                            title={value.title}
                                            itemName={value.itemName}
                                            key={index}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service