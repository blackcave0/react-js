import React from 'react'
import { useState } from 'react'
import CreateNote from './CreateNote'
import Footer from './Footer'
import Header from './Header'
import Note from './Note'

const KeepApp = () => {
    const [addItem, setItem] = useState([]);

    const addNote = (createNote) => {
        // alert('called')
        setItem((arry) => {
            return [...arry, createNote]
        })
        console.log(createNote);
    }

    const onDelete = (id) => {
        // console.log('deleted');
        setItem((oldData) =>
            oldData.filter((curData, indx) => {
                return indx !== id;
            })
        )
    }

    return (
        <>
            <Header />

            <CreateNote passNote={addNote} />
            <div className="class__keepApp">

                {/* <Note title={"My title"} content={'My contents'}/> */}
                {
                    addItem.map((val, index) => {
                        return (
                            <Note
                                key={index}
                                id={index}
                                title={val.title}
                                content={val.contents}
                                deleteItem={onDelete}
                                className='map__note'
                            />
                        )
                    })
                }
            </div>
            <Footer />
        </>

    )
}

export default KeepApp