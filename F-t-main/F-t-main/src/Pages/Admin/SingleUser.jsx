import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Box, Button ,Heading ,ListIcon,ListItem,List} from "@chakra-ui/react";
import { MdCheckCircle  } from 'react-icons/md'
import { AdminNav } from "./AdminNav";
export  const SingleUser=()=>{

    const params=useParams();
    const {id}=params;
    const [user,setUser]=useState([]);

useEffect(()=>{
fetch(`https://backend-ergaurav13.onrender.com/users/login/${id}`).then((res)=>res.json()).then((res)=>{
  setUser(res)
  console.log(res)
})
},[])

return <>
<AdminNav/>
<Box bg="pink" w="100%" h="100vh"  backgroundImage="url('https://wallpapercave.com/wp/wp2003930.jpg')"
  backgroundPosition="center"
  backgroundRepeat="no-repeat">
 <Heading   color="red" ml="40%">USER DETAILS</Heading>
{user.map((user,i)=>{
    return < >
    <Box  boxShadow='lg' color={"white"} bg="blackAlpha.400"  w="40%" m="auto" ml="31%" mt="8%" key={i}  fontSize="20px">
     
     <List spacing={3}  color="white" >
  <ListItem color={"white"} bg="blackAlpha.800" textShadow= '0 0 20px white'>
    <ListIcon as={MdCheckCircle} color='green.500' />
    User ID :{user._id} 
  </ListItem>
  <ListItem color={"white"} bg="blackAlpha.800">
    <ListIcon as={MdCheckCircle} color='green.500' />
    User Name :{ user.firstName}
  </ListItem>
  <ListItem color={"white"} bg="blackAlpha.800">
    <ListIcon as={MdCheckCircle} color='green.500' />
    User email :{user.email}
  </ListItem>
  <ListItem color={"white"} bg="blackAlpha.800">
    <ListIcon as={MdCheckCircle} color='green.500' />
    User role :{user.role} 
  </ListItem>
  
 
</List>


     <Link to="/Listofusers"  ><Button ml="40%"bg="blue" color= "white" >GO Back</Button></Link>
     </Box>
   
    </>
})}
</Box>
    </>
} 
