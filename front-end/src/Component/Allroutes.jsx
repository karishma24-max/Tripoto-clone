import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Package  from '../Pages/Package/Package'
import Singlepackagepage from '../Pages/Package/Singlepackagepage'
import Homepage from './Homepage'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route/>
        <Route path="/package" element={<Package/>}/>
        <Route path="/singel" element={<Singlepackagepage/>}/> 
        <Route/>

    </Routes></div>
  )
}

export default Allroutes