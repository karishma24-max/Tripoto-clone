import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Package  from '../Pages/Package/Package'
import Singlepackagepage from '../Pages/Package/Singlepackagepage'
import Singapore from "../Pages/inspiration/Singapore/Singapore"
import Beaches from "../Pages/inspiration/Beaches/Beaches"
import Mountain from "../Pages/inspiration/Mountain/Mountain"
import Home from "../Pages/Homepage"
import Tripper from "../Pages/Publish/Publish_trip1"
import Login from "../Pages/Login&signup/Login"
import SignIn from "../Pages/Login&signup/SignIn"
import SeeComment from "../Pages/Publish/SeeComment"
import { Admin } from '../Pages/Admin/Admin'
import { Listofusers } from '../Pages/Admin/Listofusers'
import { AdminQuerry } from '../Pages/Admin/AdminQuerry'
import { SingleUser } from '../Pages/Admin/SingleUser'
import Private from './Private'
const Allroutes = () => {
  return (
    <div><Routes>
    <Route path="/" element={<Home/>}/>
        <Route path='/singapore' element={<Private> <Singapore/></Private>}/>
            <Route path='/beaches' element={<Beaches/>}/>
            <Route path='/mountain' element={<Mountain/>}/>
        <Route path="/packages" element={<Package/>}/>
        <Route path="/packages/:id" element={<Singlepackagepage/>}/>
        
        <Route path="/tripper" element={<Tripper/>}/>
        <Route path="/comment" element={<SeeComment/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup"  element={<SignIn/>}/>
        <Route path="/admin" element={<Admin/>} />
        <Route path="/Listofusers" element={<Listofusers />} />
        <Route path="/adminQuerry" element={<AdminQuerry  />} />
        <Route path="Listofusers/:id" element={<SingleUser />} />
    </Routes></div>
  )
}

export default Allroutes