import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Package  from '../Pages/Package/Package'
import Singlepackagepage from '../Pages/Package/Singlepackagepage'
import Publish from '../Pages/Publish/Publish_trip1';
import See from '../Pages/Publish/See_comment';



const Allroutes = () => {
  return (
    <div><Routes>
        <Route />
        <Route/>
        <Route path="/package" element={<Package/>}/>
        <Route path="/singel" element={<Singlepackagepage/>}/>
        <Route path="/public_trip" element={<Publish />} />
        <Route path="/comment" element={<See />} />
        <Route/>

    </Routes></div>
  )
}

export default Allroutes