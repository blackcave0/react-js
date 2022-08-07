import React from 'react'
import SeriesData from '../props/C23_arrayNetflix'
import Card from './Card'
const AmazonCard = () => {
    return (
        <Card
        key={SeriesData[1].id}
        sname={SeriesData[1].sname}
        imgsrc={SeriesData[1].imgsrc}
        title={SeriesData[1].title}
        link={SeriesData[1].link}
      />
    )
}

export default AmazonCard