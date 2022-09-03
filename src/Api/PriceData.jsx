import React from 'react'

const PriceData = (props) => {
    return (
        <>
            <ol>
                <li>{props.code}</li>
                <li>{props.description}</li>
                <li>{props.rate}</li>
                <li>{props.rate_float}</li>
            </ol>
        </>
    )
}

export default PriceData