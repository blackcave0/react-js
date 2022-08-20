import React from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import ListItem from './ListItem'
const TodoMaterial = () => {
    const [item, setItem] = useState('');

    const [newitemAdded, setItemAdded] = useState([]);

    // Input Tag
    const inputItem = (event) => {
        setItem(event.target.value)

    }

    const input = document.getElementById('input')

    // BUTTON ELEMENT 
    const buttonAdd = () => {
        setItemAdded((arrayOfItem) => {
            return (
                [...arrayOfItem, item]
            )
        })

        if (newitemAdded.length >= 2) {
            alert('react');
            setItem(()=>{
                input.setAttribute('disabled', true)
                setItem('')
            })
        }else {
            setItem('')
        }
        // without value attribute in input tag this line of code doesn't work
    }

    return (
        <>
            <h1 className="heading_style">todo app material-ui</h1>
            <div className="todo__center__div">
                <div className="todo__main__div">
                    <h1>todo list</h1>
                    <input type="text" id='input' value={item} placeholder='Add Item' onChange={inputItem} />
                    <Button variant="contained" color="default" onClick={buttonAdd}>
                        {/* Primary */}
                        <AddIcon />
                    </Button>

                    <ol>
                        {
                            newitemAdded.map((value, index) => {
                                return (
                                    <ListItem
                                        value={value}
                                        key={index}
                                    />
                                )
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    )
}

export default TodoMaterial