import React from 'react'
import C22propsNetflix from './C22_propsNetflix'
// import C22_propsNetflix from './C22_propsNetflix'
import './card.css'
import SeriesData from './C23_arrayNetflix'

/* var value =(val)=>{
  return(
    <C22propsNetflix
    sname ={val.sname}
    imgsrc={val.imgsrc}
    title={val.title}
    link={val.link}
    />
  )
} */

const PropsApp = () => {
  // SeriesData.map((item)=>{
    // const [favInput, setFavInput] = useState('')

    return (
      <>
        <h1 className="heading_name">my favorite top 5 netflix series</h1>

        {
          // :: USING MAP METHOD
          // eslint-disable-next-line array-callback-return
          SeriesData.map((item, index, arr)=>{
            // console.log(arr);
            return (
              <C22propsNetflix
                key ={item.id}
                sname ={item.sname}
                imgsrc={item.imgsrc}
                title={item.title}
                link={item.link}
              />
              
            )

          })
        }
        

        {/* <input type="text" value={value} onChange={onChangeEvent}/>
        <button type='button' onClick={myButton}>CLICK ME</button> */}
        
        {/* <ConditionalApp/> */}
        {/*
          //>> Creating Custome Card
        */}

        {
        /* <C22propsNetflix
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
        />
        */
        }

      </>
    )
  // })
}

export default PropsApp