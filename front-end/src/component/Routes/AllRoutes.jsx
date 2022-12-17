import React from "react";

import { Route, Routes } from 'react-router-dom'
import Beaches from "../inspiration/Beaches/Beaches";
import Mountain from "../inspiration/Mountain/Mountain";
import Singapore from "../inspiration/Singapore/Singapore";
const AllRoutes=()=>{
    return (
        <Routes>
            <Route path='/singapore' element={<Singapore/>}/>
            <Route path='/beaches' element={<Beaches/>}/>
            <Route path='/mountain' element={<Mountain/>}/>
        </Routes>
    )
}
export default AllRoutes