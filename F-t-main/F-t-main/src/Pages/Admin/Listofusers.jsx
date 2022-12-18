import { Heading,Box,Button,Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer } from "@chakra-ui/react";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { AdminNav } from "./AdminNav";


export  const Listofusers=()=>{
  
    const [user,setUser]=useState([]);
useEffect(()=>{

fetch("https://backend-ergaurav13.onrender.com/users/login").then((res)=>res.json()).then((res)=>{
  setUser(res)
  console.log(res)
})

},[])

return <>
<AdminNav/>
<Box h="100vh" backgroundImage="url('https://upload.wikimedia.org/wikipedia/commons/8/80/Best-Threat-Maps.png')"
  backgroundPosition="center"
  backgroundRepeat="no-repeat" m="auto">
    <Button  w="18%" ml="40%" mt="20px" bg="white"> <Heading  color={"black"}>List of Users</Heading></Button>
    
    <TableContainer w="50%" m="auto" mt="20px">
    <Table variant='simple'>
    <Thead>
      <Tr  bg="blackAlpha.800">
        <Th color={"Red"}>S.no</Th>
        <Th color={"Red"}>User Name</Th>
        <Th color={"Red"}>Click</Th>
      </Tr>
    </Thead>
    <Tbody>
   {user.map((e,i)=>{
       return <> 
       
        <Tr>
        <Td  color={"white"} bg="blackAlpha.800">{i+1}</Td>
        <Td color={"white"} bg="blackAlpha.800">{e.firstName}</Td>
        <Td  bg="blackAlpha.800" > <Link to={`/Listofusers/${e._id}`}> <Button m="5px"  colorScheme='teal' size='sm'>More Details</Button> </Link></Td>
      </Tr>
      
           </>
    })}
</Tbody>
</Table>
    </TableContainer>
 
</Box>
    </>
} 

<TableContainer>
  <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>