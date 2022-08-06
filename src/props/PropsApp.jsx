import React from 'react'
import C22propsNetflix from './C22_propsNetflix'
// import C22_propsNetflix from './C22_propsNetflix'
import './card.css'
import SeriesData from './C23_arrayNetflix'


const PropsApp = () => {
  return (
    <>
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <C22propsNetflix

      />


      {/* 
        //>> Creating Custome Card
      */}

      <h1 className="heading_name">my favorite top 5 netflix series</h1>
      {/* <C22propsNetflix
        imgsrc='https://wallpapercave.com/dwp1x/wp4056410.jpg'
        title='A Netflix Orignal Series'
        SeriesName='DARK'
        link='https://www.netflix.com/in/title/80100172'
      />
      <C22propsNetflix
        imgsrc='https://wallpapercave.com/dwp1x/wp4056410.jpg'
        title='A Netflix Orignal Series'
        SeriesName='DARK'
        link='https://www.netflix.com/in/title/80100172'
      />
      <C22propsNetflix
        imgsrc='https://wallpapercave.com/dwp1x/wp4056410.jpg'
        title='A Netflix Orignal Series'
        SeriesName='DARK'
        link='https://www.netflix.com/in/title/80100172'
      /> */}
      
    </>    
  )
}

export default PropsApp