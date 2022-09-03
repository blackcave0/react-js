import React from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';

const CreateNote = (props) => {

    const [expand, setExpand] = useState(false);
    const expandIt = () => setExpand(true);
    const foldIt = () => setExpand(false);
    const [createNote, Note] = useState({
        title: '',
        contents: ''
    });

    const inputEvent = (event) => {
        const { name, value } = event.target;
        Note((data) => {
            return {
                ...data,
                [name]: value,
            }
        })

    }

    // created here and access form KeepApp 
    const addEvent = () => {
        props.passNote(createNote);
        Note({
            title: '',
            contents: ''
        })
    }


    return (
        <>
            <div className="google_main__note" onDoubleClick={foldIt}>
                <form>
                    {
                        expand ?
                            <input
                                type="text"
                                value={createNote.title}
                                name='title'
                                onChange={inputEvent}
                                placeholder='Title...'
                                autoComplete='off'
                                autoFocus="on"
                            />
                        : null
                    }
                    <textarea
                        cols=" "
                        rows=" "
                        value={createNote.contents}
                        name='contents'
                        onChange={inputEvent}
                        placeholder='Write a note...'
                        onClick={expandIt}
                    >
                        {/* Text Area */}
                    </textarea>
                    {
                        expand ?
                            <Button onClick={addEvent}>
                                <AddIcon className='goole_plus_sign' />
                            </Button>
                        : null
                    }
                </form>
            </div>
        </>
    )
}

export default CreateNote