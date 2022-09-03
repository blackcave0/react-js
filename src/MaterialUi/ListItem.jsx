import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { useState } from 'react';
const ListItem = (props) => {
    const [line, cutLine] = useState(false);
    const cutLineAdding =()=>{
        cutLine(true)
    }
    return (
        <>
            <div className="todo__li__style">
                <span onClick={cutLineAdding}>
                    <DeleteIcon className='deleteIcon'/>
                </span>
                <li style={{textDecoration : line ? "line-through" : 'none'}}>{props.value}</li>
            </div>
            <p></p>
        </>
    )
}

export default ListItem