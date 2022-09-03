import React from 'react'
import CopyrightIcon from '@material-ui/icons/Copyright';
const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <>
            <footer>
                <CopyrightIcon/> {year}
            </footer>
        </>
    )
}

export default Footer