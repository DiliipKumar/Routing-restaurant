import React, { useState } from 'react'
import ManuApi from './ManuApi'
import ManuCard from './ManuCard'

export default function Manu() {
    const [manuData,setManuData]=useState(ManuApi)
  return (
    <div>
    <ManuCard manuData={manuData} /> 
    </div>
  )
}

