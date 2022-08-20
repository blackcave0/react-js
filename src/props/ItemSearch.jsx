import React from 'react'
import C22propsNetflix from './C22_propsNetflix'
// import C22_propsNetflix from './C22_propsNetflix'
import './card.css'
import SeriesData from './C23_arrayNetflix'
import { useState } from 'react'

const ItemSearch = () => {
    // SeriesData.map((items,index)=>{
        // Storting value from Input tag
        const [setValue, getValue] = useState('');
        const onChangeEvent=(e)=>{
            // updating value in setValue 
            getValue(e.target.value)
        }

        const [setValueToMatchValue, updateValueToGetValue] = useState('');
        const myButton =()=>{
            updateValueToGetValue(setValue)
        }

        const searchItme = setValueToMatchValue;
        
        return ( 
            <>
                <div className="searchDiv">
                    <h1 className="heading_name">my favorite top 5 netflix series</h1>
                    <input type="text" value={setValue} onChange={onChangeEvent} autoFocus='true'/>
                    <button type='button' onClick={myButton}>search</button>
                </div>
                {


                    SeriesData.map((items,) => {
                        if (searchItme === items.platform) {
                            return (
                                <C22propsNetflix
                                    key={items.id}
                                    sname={items.sname}
                                    imgsrc={items.imgsrc}
                                    title={items.title}
                                    link={items.link}
                                    platform={items.platform} 
                                />
                            )
                        }  else {
                            return null
                        }

                    })
                }

            </>
        )
    // })
}

export default ItemSearch