import React from 'react'
import { NavLink } from 'react-router-dom'


// ## THIS COMPONENT FOR HOME AND ABOUT 
const Common = (props) => {
    const webTech = 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-00.appspot.com/o/headerImage%2FProgramming.gif?alt=media&token=ecbf7ce6-645f-4dce-8f4b-4edc2eb5004c'
    return (
        <>
            <section id="header" className="d-flex align-items-center mt-5">
                <div className=" container-fluid nav_bg">
                    <div className="row">

                        {/* 10 colom and center */}
                        <div className="col-10 mx-auto">
                            <div className="row  justify-content-between">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1> {props.name}
                                        <strong className='text-info'> Rudraksh Srivastava</strong>
                                    </h1>
                                    <h2 className='my-2'>
                                        We build for Best Nation
                                    </h2>
                                    <div className="mt-3 ">
                                        <NavLink to={props.visit} className=' btn-get-started '>{props.btname}</NavLink>
                                    </div>
                                </div>
                                {/* order-1 mean mobile me top show and oreder-2 mean web me niche  */}
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={webTech} alt="img" className='img-fluid animated' />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Common