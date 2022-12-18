import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Heading,Box,Button,Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer } from "@chakra-ui/react";
import { AdminNav } from "./AdminNav";
export  const AdminQuerry=()=>{
const [data,setData]=useState([]);
const [chng,setChng]=useState(false)
useEffect(()=>{

fetch("https://backend-ergaurav13.onrender.com/users/querry").then((res)=>res.json()).then((res)=>{
    setData(res);
})
},[])

    return <>
    <AdminNav/>
    <Box w="100%" h="100vh" backgroundImage="url('https://img.freepik.com/fotos-premium/tema-viaje-avion-miniatura_93675-62964.jpg?w=2000')"
  backgroundPosition="center"
  backgroundRepeat="no-repeat"  >
    
    <TableContainer w="90%" m="auto" >
    <Table variant='simple' mt="20px">
    <Thead>
      <Tr  bg="blackAlpha.800">
        <Th color={"Red"}>S.NO</Th>
        <Th color={"Red"}>NAME</Th>
        <Th color={"Red"}>CONTACT</Th>
        <Th color={"Red"}>EMAIL</Th>
        <Th color={"Red"}>CITY</Th>
        <Th color={"Red"}>ADULT</Th>
        <Th color={"Red"}>CHILD</Th>
        <Th color={"Red"}>ROOM</Th>
        <Th color={"Red"}>DATE</Th>
        <Th color={"Red"}>{" "}</Th>
      </Tr>
    </Thead>
    <Tbody>
   {data.map((e,i)=>{
       return <> 
        <Tr>
        <Td  color={"white"} bg="blackAlpha.800">{i+1}</Td>
        <Td color={"white"} bg="blackAlpha.800">{e.name}</Td>
        <Td color={"white"} bg="blackAlpha.800">{e.contact}</Td>
        <Td color={"white"} bg="blackAlpha.800">{e.email}</Td>
        <Td color={"white"} bg="blackAlpha.800">{e.city}</Td>
        <Td color={"white"} bg="blackAlpha.800">{e.adult}</Td>
        <Td color={"white"} bg="blackAlpha.800">{e.children}</Td>
        <Td color={"white"} bg="blackAlpha.800">{e.room}</Td>
        <Td color={"white"} bg="blackAlpha.800">{e.date}</Td>
        <Td  bg="blackAlpha.800" > <Link  > <Button m="5px" onClick={()=>setChng(!chng)} colorScheme='teal' size='sm'>{chng?"Resolved":"Querry to resolve"}</Button> </Link></Td>
      </Tr>
      
           </>
    })}
</Tbody>
</Table>
    </TableContainer>
    </Box>
    </>
} 