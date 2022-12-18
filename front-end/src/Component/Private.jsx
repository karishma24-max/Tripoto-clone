import {useContext } from "react"
import { MdGeneratingTokens } from "react-icons/md";
import { Navigate } from "react-router-dom";
import { ShowContext } from "../Context/ShowContext"
export default function Private ({children}){
    const {token }= useContext(ShowContext);
 const {isAuth}=token
 console.log(isAuth,token,"private")
    if(!token){
    return  <Navigate to="/login"/>
      }
     return children

}