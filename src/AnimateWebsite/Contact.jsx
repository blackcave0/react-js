import React from 'react'
import { useState } from 'react'


// ! IMPROVE THIS FORM WITH COMPONENT FOR ON DIV USE
const Contact = () => {
    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        message: '',
    });

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`
            Thank You ${data.fullname}. Your Phone Number Is ${data.phone}, Email Is ${data.email} And Message Is ${data.message}.
        `)
    }

    const inputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })


    }

    return (
        <>
            <div className="my-5">
                <h1 className="text-center text-uppercase">contact us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    placeholder='Type...'
                                    autoComplete='of'
                                    name='fullname'
                                    value={data.fullname}
                                    onChange={inputEvent}
                                />
                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='000000000'

                                    autoComplete='of'
                                    name='phone'
                                    value={data.phone}
                                    onChange={inputEvent}
                                />
                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='email@example.com'
                                    autoComplete='of'
                                    name='email'
                                    value={data.email}
                                    onChange={inputEvent}
                                />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                    placeholder='Type Message...'
                                    autoComplete='of'
                                    name='message'
                                    value={data.message}
                                    onChange={inputEvent}
                                ></textarea>
                            </div>
                            <div className="col-12 mt-5">
                                <button className="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact