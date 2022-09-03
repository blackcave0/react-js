import React from 'react'
import EventNoteIcon from '@material-ui/icons/EventNote';
const Header = () => {
    return (
        <>
            <div className="google__header">
                <div className="google__logo">
                    <span><EventNoteIcon /></span>
                    <h1>my keep</h1>
                </div>
            </div>
        </>
    )
}

export default Header