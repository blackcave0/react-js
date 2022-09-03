import React from 'react'
import { useState } from 'react'
import Result from './Result';

const SearchApp = () => {
    const [Imge, setImage] = useState('');
    const searchFun = (e) => {
        const data = e.target.value;
        console.log(data)
        setImage(data)
    }
    return (
        <>
            <div className="search__bar">
                <input type="text" placeholder='Search...'
                    value={Imge}
                    onChange={searchFun}
                />
                {Imge === '' ? null : <Result name={Imge}/>}
            </div>
        </>
    )
}

export default SearchApp