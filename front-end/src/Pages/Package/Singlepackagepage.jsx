import { Box, Button, Flex, Heading, Image, Input, Select, Spacer, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { useParams } from "react-router-dom"
import "../Package/singlepackage.css"

const Singlepackagepage = () => {
    const params= useParams()
    const id=params.id
    console.log(params)
    const [singleji,setSingleji]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:8000/mindful/${id}`)
        .then(res=>setSingleji(res.data))
        console.log(singleji)
            },[id])

        useEffect(()=>{
        axios.get(`http://localhost:8000/domestic/${id}`)
        .then(res=>setSingleji(res.data))
        console.log(singleji)
        },[id])

        useEffect(()=>{
        axios.get(`http://localhost:8000/international/${id}`)
        .then(res=>setSingleji(res.data))
        console.log(singleji.image1)
        },[id])
  return (
    <div className='single-kiya'>
    <Flex > <Box ml="100px" mb="100px"><Box color="black" w="90%" h="700px">
    <Box ml="100px" mt="30px" bg="cream">  
     <Carousel autoPlay>
                <div>
                    <Image src={singleji.image1}  />
                    
                </div>
                <div>
                    <Image src={singleji.image2} />
                    
                </div>
                <div>
                    <Image src={singleji.image3} />
                   
                </div>
                <div>
                    <Image src={singleji.image4} />
                   
                </div>
            </Carousel></Box></Box>
    <Heading mt="10px">
        Overview
    </Heading>
    <Text mt="30px" fontSize="17px">Experience mountain life in the truest sense at a creative studio, that supports and innovates the local craft of the region. On this Mindful Retreat to Naggar, a lesser-known mountain destination in Himachal, you will experience a relaxing stay in a Kathkuni home made with traditional wisdom, relish the local delicacies of Himachal, and explore the estate and art gallery of painter and activist Nicholas Roerich. Come, be greeted by the sights and sounds of lush deodar forests and find yourself again amidst art and nature. 
</Text>
    <Text mt="30px" fontSize="17px">The retreat comes with a free one-time rescheduling option. Let us know 72 hours ahead of the stay and pick another date as per your convenience within the next three months. 
</Text>
<Text mt="30px" fontSize="17px" fontWeight="bold">What you will love</Text> 
<Text mt="10px" fontSize="17px">
<li>Staying in a Kathkuni home set in a charming valley.</li>
<li>Exploring Naggar and feasting on the local delicacies including Siddu.</li>
<li>A tasting ceremony of herbal teas and wild honey.</li>
<li>Exploring the estate and gallery of Russian painter and activist Nicholas Roerich which depict the mountain life.</li>
 <li>Hikes into the lush deodar forests while collecting souvenirs and finding treasures of nature.</li>
 <li>Nights under starry skies with the team of North.</li>
</Text>
 <Text mt="30px" fontSize="17px" fontWeight="bold">Where you'll stay</Text> 
 <Text mt="10px" fontSize="17px" >
  <li>In a Kathkuni home carefully crafted with wood, stone and glass and nestled amidst deodars.</li> 
  <li>The stay has three cosily furnished private double occupancy rooms, each with attached washrooms.</li>
  <li>The estate is home to Rahul, Ritika & Swara, who run a design studio in the campus.</li>
</Text>
  <Text mt="30px" fontSize="17px" fontWeight="bold">At the retreat you will experience-</Text>

  <Text mt="10px" fontSize="17px" fontWeight="bold"><li>From movie nights to karaoke - it’s time for some fun!</li></Text>
  <Text mt="10px" fontSize="17px"  >–  A cinema screening in the evenings in the heart of the majestic scenic beauty.</Text>
<Text  fontSize="17px" >– A rooftop cafe where you can chill with like-minded travellers.</Text>
<Text fontSize="17px">– Enjoy a chance to sing your heart out at the Karaoke night. 
</Text>



  <Text mt="10px" fontSize="17px" fontWeight="bold"><li>A chance to soak in the local traditions</li></Text>
  <Text mt="10px" fontSize="17px"  >–  – Explore the Himachali culture in Kasauli.</Text>
<Text  fontSize="17px" >– Go back in time and enjoy the rustic feel of living in a mud cottage amidst nature.</Text>
<Text fontSize="17px">– Enjoy a chance to sing your heart out at the Karaoke night. 
</Text>
    </Box>
    
   
    
    
    <Box >
    
    
    
     <div className='formkiya'><Text mt="20px" pl="10px" pr="10px" fontWeight="bold" fontSize="17px">Enter Your Details and Proceed To Book</Text>
    <Flex textAlign="center">
    
    <form>
        <Input w="280px" mt="10px" border="2px" placeholder='Email'/>
        <Input  w="280px" mt="10px" border="2px" placeholder='Full Name'/>
        <Input w="280px" mt="10px" border="2px" placeholder='Contact-Number'/>
        <Input w="280px" mt="10px" border="2px" placeholder='Departure-City'/>

        <Select w="290px" mt="10px" border="2px" ml="10px" pr="8px" placeholder='Select Adults' color="grey"></Select>
        <Select w="290px" mt="10px" border="2px"  ml="10px" pr="8px" placeholder='Select Children' color="grey"></Select>
        <Select w="290px" mt="10px" border="2px" ml="10px" pr="8px" placeholder='Select Type of room' color="grey"></Select>
        <Input w="280px" mt="10px" border="2px" ml="5px"  type="Date" color="grey"/>

       <Flex w="80%" m="auto" mt="20px"> <Text fontWeight="bold">Amount :</Text><Spacer/><Text fontSize="14px" mt="10px" color="grey">Starting from ₹ {"Price"}</Text></Flex>

       <Text fs="16px" c="grey" mt="10px">Taxes and discounts are calculated at checkout.</Text>
       <Button bg="cornflowerblue" w="280px" h="60px" mt="10px" color="white" fontWeight={"bold"}>Next</Button>
       
    </form>
  
    </Flex>
    
    
    </div></Box></Flex>  <hr/> </div>
  )
}

export default Singlepackagepage