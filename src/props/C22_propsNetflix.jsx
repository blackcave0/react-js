import React from 'react'
import Images from './Images'
// import './card.css'

// ## THIS IS MAIN CARD
const C22_propsNetflix = (props) => {
    
    return ( 
        <>
            <div className="cards">
                <div className="card">
                    {/* <img src={props.imgsrc} alt="mypic" className="card__img" /> */}
                    <Images imgsrc={props.imgsrc}/>
                    <div className="card__info">
                        <span className="card__category">{props.title}</span>
                        <h3 className="card__title">{props.sname}</h3>
                        <a href={props.link} target="_blank" rel="noreferrer" > 
                            <button id='btn'>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default C22_propsNetflix