import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import PriceData from './PriceData';

const CoinDesk = () => {
    const [getApi, setApi] = useState();

    useEffect(() => {
         async function coinDesk_data(){
            const resposeValue = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            // console.log(resposeValue.data.bpi);
            // const {USD, GBP, EUR} = resposeValue.data.bpi;
            // setApi(resposeValue.data)
            // console.log(getApi)
            // console.log(USD)

            const datas =  resposeValue.data.bpi
            // setApi(datas)
            return datas

            
            
        }
        setApi(coinDesk_data())
    },[])
    console.log(getApi);

    
    return (
        <>
            {
                // getApi.map((curC) => {
                //     return (
                //         <PriceData
                //             code={curC.code}
                //             description={curC.description}
                //             rate={curC.rate}
                //             rate_float={curC.rate_float}
                //         />
                //     )
                // })
            }
        </>
    )
}

export default CoinDesk