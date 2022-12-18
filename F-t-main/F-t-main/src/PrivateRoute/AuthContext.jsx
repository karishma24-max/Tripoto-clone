import { createContext } from "react"
import {useState,CreateContext} from "react"

export const AuthContext=createContext()

const init={
  isAuth:false,
  user:"user"
}

export function AuthContextProvider({children}){
  const [isAuthc,setIsAuthc]=useState(init);

return <AuthContext.Provider value={{isAuthc,setIsAuthc}}>
  {children}
</AuthContext.Provider>
}