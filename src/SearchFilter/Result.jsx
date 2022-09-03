import React from 'react'

const Result = (props) => {
    // const img = `https://source.unsplash.com/400x400/?mango`
    const img = `https://source.unsplash.com/400x400/?${props.name}`
    return (
        <>
            <div className="result">
                <img src={img} alt="serch" />
            </div>
        </>
    )
}

export default Result