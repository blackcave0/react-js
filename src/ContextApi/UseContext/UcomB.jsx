import React, { useContext } from 'react'
// import UcomC from './UcomC'
import { FristName, LastName} from './UseContextApp'
const UcomB = () => {
  const fname = useContext(FristName)
  const lname = useContext(LastName)
  return (
    <>
      {fname} <br/> {lname}
    </>
  )
}

export default UcomB