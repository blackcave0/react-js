import React, { useState, useEffect } from 'react'
import axios from 'axios'
const AxiosApi_App = () => {
    const [selectedValue, setValue] = useState('');

    const onChange = (event) => {
        setValue(event.target.value)
    }

    const [names, setName] = useState();
    const [move, setMove] = useState();

    useEffect(() => {
        async function getData() {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedValue}`);
            // console.log(response);
            const {name, moves} = response.data
            setName(name)
            setMove(moves.length)
            // setMove(moves[0].move.name)
            /* setMove(
                moves.map((element) => {
                    return (
                        console.log(element.move.name)
                    )
                })
            ) */
        }
        getData()
    });

    return (
        <>
            <h1>You choose {selectedValue} value</h1>
            <h1>My Name is {names}</h1>
            <h1>I have {move} moves</h1>
            <select value={selectedValue} onChange={onChange}>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </>
    )
}

export default AxiosApi_App