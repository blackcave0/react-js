import React from 'react'
import SeriesData from '../props/C23_arrayNetflix'
import Card from './Card'
const NetflixCard = () => {
    return ( 
        <Card
        key={SeriesData[0].id}
        sname={SeriesData[0].sname}
        imgsrc={SeriesData[0].imgsrc}
        title={SeriesData[0].title}
        link={SeriesData[0].link}
      />
    )
}

export default NetflixCard