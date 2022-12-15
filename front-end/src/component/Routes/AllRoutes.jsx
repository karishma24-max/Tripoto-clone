import React from "react";
import { Route, Routes } from 'react-router-dom'
import Beaches from "../inspiration/Beaches/Beaches";
import Singapore from "../inspiration/Singapore/Singapore"
const AllRoutes=()=>{
    return (
        <Routes>
            <Route path='/singapore' element={<Singapore/>}/>
            <Route path='/beaches' element={<Beaches/>}/>
        </Routes>
    )
}
export default AllRoutes