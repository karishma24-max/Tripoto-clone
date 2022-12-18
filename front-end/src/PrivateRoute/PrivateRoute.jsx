import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
export function PrivateRoute({children}){

const {isAuthc} =useContext(AuthContext);

 if(!isAuthc.isAuth){
    return <Navigate to="/login" />
 }

return children

}