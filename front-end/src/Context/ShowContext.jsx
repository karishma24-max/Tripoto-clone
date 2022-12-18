import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

const auth={
  isAuth:false,
  user:" "
}

export const ShowContext = createContext()
function ShowContextProvider({children}) {

  const [token,setToken]=useState(auth)
   const [show, setShow] = useState(false)
  return (
    <ShowContext.Provider value={{show,setShow,token,setToken}}>

        {children}
    </ShowContext.Provider>
  )
}

export default ShowContextProvider