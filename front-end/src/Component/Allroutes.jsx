import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Package  from '../Pages/Package/Package'

const Allroutes = () => {
  return (
    <div><Routes>
        <Route />
        <Route/>
        <Route path="/package" element=<Package/>/>
        <Route/>

    </Routes></div>
  )
}

export default Allroutes