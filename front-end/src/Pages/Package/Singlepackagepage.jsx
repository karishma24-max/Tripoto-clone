import { Box, Button, Flex, Input, Select, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { Form } from 'react-router-dom'
import "../Package/singlepackage.css"

const Singlepackagepage = () => {
  return (
    <div className='single-kiya'>
    <Flex > <Box border="2px" color="black" w="70%" h="700px"></Box> <Box textAlign="center" border="1px" w="30%" ><Text mt="20px" fontWeight="bold" fontSize="17px">Enter Your Details and Proceed To Book</Text>
    <Flex textAlign="center">
    <form>
        <Input w="280px" mt="10px" border="2px" placeholder='Email'/>
        <Input  w="280px" mt="10px" border="2px" placeholder='Full Name'/>
        <Input w="280px" mt="10px" border="2px" placeholder='Contact-Number'/>
        <Input w="280px" mt="10px" border="2px" placeholder='Departure-City'/>

        <Select w="280px" mt="10px" border="2px" ml="45px" placeholder='Select Adults' color="grey"></Select>
        <Select w="280px" mt="10px" border="2px"  ml="45px" placeholder='Select Children' color="grey"></Select>
        <Select w="280px" mt="10px" border="2px" ml="45px" placeholder='Select Type of room' color="grey"></Select>
        <Input w="280px" mt="10px" border="2px"  type="Date" color="grey"/>

       <Flex w="80%" m="auto" mt="20px"> <Text fontWeight="bold">Amount :</Text><Spacer/><Text fontSize="14px" mt="10px" color="grey">Starting from ₹ {"Price"}</Text></Flex>

       <Text fs="16px" c="grey" mt="10px">Taxes and discounts are calculated at checkout.</Text>
       <Button bg="cornflowerblue" w="280px" h="60px" mt="10px" color="white" fontWeight={"bold"}>Next</Button>
       
    </form>
    </Flex>
    
    
    </Box></Flex></div>
  )
}

export default Singlepackagepage