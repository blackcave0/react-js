import React from 'react'
import { useState } from 'react'
import { questions } from './apiData'
import MyAccordion from './MyAccordion';

const AccordionApp = () => {
    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useState(questions);

    return (
        <>
            <h1 className="heading_style">accordion app</h1>
            <h1 className='text-center'>react interview question</h1>
            <div className="accordion__app__div">
            <section className='section__name'>
                {
                    data.map((value) => {
                        const { id } = value
                        return <MyAccordion
                            key={id}
                            {...value}
                        />
                    })
                }
            </section>
            </div>
        </>
    )
}

export default AccordionApp