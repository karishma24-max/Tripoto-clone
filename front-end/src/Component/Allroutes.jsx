import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Package  from '../Pages/Package/Package'
import Singlepackagepage from '../Pages/Package/Singlepackagepage'

const Allroutes = () => {
  return (
    <div><Routes>
        <Route />
        <Route/>
        <Route path="/package" element=<Package/>/>
        <Route path="/package/:id" element=<Singlepackagepage/>/>
        <Route/>

    </Routes></div>
  )
}

export default Allroutes