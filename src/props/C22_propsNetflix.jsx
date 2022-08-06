import React from 'react'
// import './card.css'


const C22_propsNetflix = (props) => {
    return ( 
        <>
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} alt="mypic" className="card__img" />
                    <div className="card__info">
                        <span className="card__category">{props.title}</span>
                        <h3 className="card__title">{props.SeriesName}</h3>
                        <a href={props.link} target="_blank" rel="noreferrer" > 
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default C22_propsNetflix