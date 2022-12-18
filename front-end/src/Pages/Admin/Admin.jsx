import { Box } from "@chakra-ui/react"
import { AdminNav } from "./AdminNav"
import { AdminRoutes } from "./AdminRoutes"
export const Admin =()=>{



    

return <>
<Box w="100%" h="100vh" backgroundImage="url('https://wallpaperaccess.com/full/3214390.jpg')"
  backgroundPosition="center"
  backgroundRepeat="no-repeat">
 <AdminNav/>
 <AdminRoutes/>
 </Box>
</>
}