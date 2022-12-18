
 import React from "react";
 import { Route, Routes } from "react-router-dom";
 
 import { Listofusers } from "./Listofusers";
 import {  AdminQuerry} from "./AdminQuerry"
import { SingleUser } from "./SingleUser";
 export const AdminRoutes =()=>{
    return <>
     <Routes>
        {/* <Route path="/Listofusers" element={<Listofusers />} />
        <Route path="/adminQuerry" element={<AdminQuerry />} />
        <Route path="Listofusers/:id" element={<SingleUser />} /> */}
      </Routes>
    
    </>
 }