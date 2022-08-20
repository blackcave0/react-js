import React from 'react'
import { useState } from 'react'
// import AddRoundedIcon from '@material-ui/icons/AddRounded';
// import AddRoundedIcon from '@mui/icons-material/AddRounded';
import PlusOneRoundedIcon from '@material-ui/icons/PlusOneRounded';
import ExposureNeg1RoundedIcon from '@material-ui/icons/ExposureNeg1Rounded';
import Button from '@material-ui/core/Button';


import Clock from 'react-digital-clock';
const Increment = () => {
    const [NUM_INCREM, SET_NUM] = useState(0)
    const incremNum = () => {
        SET_NUM(NUM_INCREM + 1)
    }

    const decremNum = () => {
        if (NUM_INCREM > 0) {
            SET_NUM(NUM_INCREM - 1)
        } else {
            SET_NUM(0)
        }
    }
    return (
        <>
            <h1 className="heading_style">Increment and decrement</h1>
            <div className="center__div">

                <div className="main__div">
                    <Clock />
                    <h1>{NUM_INCREM}</h1>
                    <div className="btn__div">
                        <Button variant="contained" className='btns' onClick={incremNum}>
                            <PlusOneRoundedIcon />
                        </Button>
                        <Button variant="contained" className='btns' onClick={decremNum}>
                            <ExposureNeg1RoundedIcon />
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Increment