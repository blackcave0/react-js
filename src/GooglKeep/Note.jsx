import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Note = (props) => {
    const deleteNotes =()=> props.deleteItem(props.id);

    return (
        <>
            <div className="google__note__div">
            <div className="google__note">
                <h1>{props.title}</h1>
                <br />
                <p> {props.content} </p>
                <button onClick={deleteNotes}>
                    <DeleteOutlineIcon className='delete__icon' />
                </button>
            </div>
            </div>

        </>
    )
}

export default Note