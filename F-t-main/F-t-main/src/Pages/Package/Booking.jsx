import { Box, Button, Divider, Flex, Image, Text, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Booking() {
    const [data,setData]=useState([]);
    const toast = useToast();
    const navigate = useNavigate();

    const [price,SetPrice] =useState(0);
    useEffect(()=>{
        const d = JSON.parse(localStorage.getItem('BookingData'));
        console.log(d)
        if (d) {
            setData(d);
           }
    }, []);
    useEffect(()=>{
        const p = localStorage.getItem('price');
        SetPrice(p);       
    }, []);
  
    // console.log(data)
    console.log(price)

    const handlesubmit= ()=>{
        toast({
            title: 'Congratulations,Your trip is Booked ',
            position:'top',
            description:'Payment will be proceed after confirmation call ',
           
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
        navigate("/")

    }

        
  return (
    <>
    <Flex gap={40} padding={"10%"}>
     <Flex flexDir={'column'}>   
    <Flex paddingLeft={"10%"} pt={"5%"} gap={6}>
        <Image width={200} src="https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1660316705_image_cover_1.jpg" alt="img"/>
        <Box>
            <Text fontWeight={"bold"}>Hike to Gallu Waterfall & Discover the 'Joy of Doing Nothing'</Text>
            
            <br/>
            <Flex gap={4}>
            <Image width={30} borderRadius={50} src='https://cdn1.tripoto.com/media/filter/mss/img/2165009/UserPhoto/1628574904_tripoto_s_mindful_retreats.jpg' alt="m"/>
            <Text>Tropoto's Mindfull Retreates</Text>
            </Flex>
        </Box>
        
    </Flex>
    <Box m={"10%"} maxW='xl' >
     <Divider/>
     <br/>
     <Text fontSize={"xl"} fontWeight={"bold"}>Detail Provided</Text>
     <br/>
     <Flex flexDir={"column"} gap={8}>
    <Flex gap={80}>
        <Box>
            <Text>Full Name</Text>
            <Text fontWeight={'bold'}>{data.name}</Text>
        </Box>
        <Box>
            <Text>Email</Text>
            <Text fontWeight={'bold'}>{data.email}</Text>
        </Box>
    </Flex>

    <Flex gap={"300px"}>
        <Box>
            <Text>Contact</Text>
            <Text fontWeight={'bold'}>{data.contact}</Text>
        </Box>
        <Box>
            <Text>Destination</Text>
            <Text fontWeight={'bold'}>Himachal Pradesh</Text>
        </Box>
    </Flex>
    <Flex gap={"300px"}>
        <Box>
            <Text>Departure City</Text>
            <Text fontWeight={'bold'}>{data.city}</Text>
        </Box>
        <Box>
            <Text>Check-In Date</Text>
            <Text fontWeight={'bold'}>15 February, 2023 12:00 PM</Text>
        </Box>
    </Flex>
    
    <Flex gap={"180px"}>
        <Box>
            <Text>Check-Out Date</Text>
            <Text fontWeight={'bold'}>18 February, 2023 10:00 AM</Text>
        </Box>
        <Box>
            <Text>Duration</Text>
            <Text fontWeight={'bold'}>3 Days / 2 Nights</Text>
        </Box>
    </Flex>
    <Flex gap={"110px"}>
        <Box>
            <Text>Room Type</Text>
            <Text fontWeight={'bold'}>Deluxe room (Double occupancy) x1</Text>
        </Box>
        <Box>
            <Text>Number of People</Text>
            <Text fontWeight={'bold'}>{data.adult} Adult</Text>
        </Box>
    </Flex>
    <Flex gap={80}>
        <Box>
            <Text>Amount</Text>
            <Text fontWeight={'bold'}>{price}</Text>
        </Box>
    </Flex>
    
    </Flex>
<br/>
    <Divider/>
    </Box>
    <Box>
    </Box>

    </Flex>
    <Box p={5} width={"400px"} height={"500px"} borderWidth='1px' borderRadius='lg' overflow='hidden' >
        <Text fontWeight={'bold'}>Price Detail</Text>
        <br/>
        <Flex gap={6} justifyContent={"space-between"}>
            <Text>Total Amount</Text>
            <Text fontWeight={'bold'}>₹ {price}</Text>
        </Flex>
        <Divider>
        </Divider>
        <br/>
        <Text fontWeight={"bold"}>Redemption</Text>
        <Flex gap={6} justifyContent={"space-between"} mt={1}>
            <Text fontWeight={'bold'}>Earned Credits</Text>
            <Text color={"blue.400"}>-₹ 100</Text>
        </Flex>
        <Flex gap={6} justifyContent={"space-between"}>
            <Text>You have 25 credits in your account</Text>
            <Text>-25 Cred   </Text>
        </Flex>
        <br/>
        <Flex backgroundColor={'gray.200'} p={3} borderRadius={4} border={'thin'} justifyContent={'space-between'}> 
            <Text fontWeight={"bold"} color={"blue.400"}>Total Redemption</Text>
            <Text fontWeight={'bold'} color={"blue.400"}>₹ 100</Text>
        </Flex>
        <br/>
        <Divider/> 
        <br/> 
        <Flex gap={6} justifyContent={"space-between"} p={1}>
            <Text fontWeight={'bold'}>Tax</Text>
            <Text fontWeight={'bold'} color={"blue.400"}>+₹ 1040</Text>
        </Flex>
        <br/>
        <Divider/>  
        <br/> 
        <Flex gap={6} justifyContent={"space-between"} p={1}>
            <Text fontWeight={'bold'}>Grand Total</Text>
            <Text fontWeight={'bold'} color={"blue.400"}>₹ {price-100+1040}</Text>
        </Flex>
<br/>
        <Button onClick={handlesubmit} ml={24} colorScheme='blue'>Get Conformation</Button>
    </Box>
    </Flex>
    </>
  )
}

export default Booking