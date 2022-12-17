import { Box, Button, Flex, Heading, Image, Input, Select, Spacer, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { useParams } from "react-router-dom"
import { AiTwotonePhone} from "react-icons/ai"
import "../Package/singlepackage.css"

const Singlepackagepage = () => {
     const [initprice,setinitPrice]=useState(0)
    const params= useParams()
    const id=params.id
    console.log(params)
    const [singleji,setSingleji]=useState([])
    const init={
        name:"",
        email:"",
        contact:"",
        city:"",
         adult:"",
         children:"",
         room:"",
         date:""
    }

    const [data,setData]=useState(init)
    const handlechange=(e)=>{
       const {value,name}= e.target
       setData({...data,[name]:value})

    }
    
    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log(1)
        axios.post("http://localhost:8000/post",data)
        .then(res=>console.log(res))
        .catch(e=>console.log(e))
        setinitPrice((+[data.adult])*singleji.price)

    }
    
    useEffect(()=>{
        axios.get(`https://tripper-host.onrender.com/mindful/${id}`)
        .then(res=>setSingleji(res.data))
        console.log(singleji)
            },[id])

        useEffect(()=>{
        axios.get(`https://tripper-host.onrender.com/domestic/${id}`)
        .then(res=>setSingleji(res.data))
        console.log(singleji)
        },[id])

        useEffect(()=>{
        axios.get(`https://tripper-host.onrender.com/international/${id}`)
        .then(res=>setSingleji(res.data))
        console.log(singleji.image1)
        },[id])

        useEffect(()=>{
            axios.get(`https://tripper-host.onrender.com/honeymoon/${id}`)
            .then(res=>setSingleji(res.data))
            console.log(singleji.image1)
            },[id])
  return (
    <div className='single-kiya'>
    <Flex > <Box ml="100px" mb="100px"><Box color="black" w="90%" h="900px">
    <Box ml="100px" mt="30px" bg="cream">  
     <Carousel autoPlay  showThumbs={false}>
    
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
            </Carousel></Box>
            <Heading mt="20px">{singleji.title}</Heading>
            <Flex mt="30px"><Text fontSize="bold">Tripotos  Exclusive Tours & Holiday Packages</Text><Spacer/><Text fontSize="17px"  color="crimson" fontWeight="bold" mt="10px"><Flex><Text>8046162990</Text><Box  fontSize="20px" pt="5px" ml="5px"  color="black"><AiTwotonePhone ml="10px" mt="10px" color="crimson"/></Box> </Flex></Text></Flex>
            <hr/>
            <Flex mt="20px"><Button bg="teal" w="150px">3D-4N</Button><Spacer/><Text fontSize="20px" fontWeight="bold"> ₹{singleji.price} </Text><Text color="grey" ml="10px" fontWeight="17px">/person</Text></Flex>
            <Text fontSize="17px" fontWeight="bold" mt='10px' color="grey">Location</Text>
            <Text fontSize="17px" fontWeight="bold" mt='10px'>{singleji.location}</Text>
            <Text fontSize="17px" fontWeight="bold" mt='10px' color="grey">Highlights</Text>
            <Flex mt="20px"><Button mr="20px" bg="teal.200">Meals</Button> <Button mr="20px" bg="teal.200">Breakfast</Button> <Button mr="20px" bg="teal.200">SightSeeing</Button><Button mr="20px" bg="teal.200">Station</Button><Button mr="20px" bg="teal.200">Hidden Gem</Button></Flex> </Box>
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
    
    <form onSubmit={handlesubmit}>
        <Input w="280px" mt="10px" border="2px" placeholder='Email' name="email" onChange={handlechange} />
        <Input  w="280px" mt="10px" border="2px" placeholder='Full Name' name="name" onChange={handlechange}/>
        <Input w="280px" mt="10px" border="2px" placeholder='Contact-Number' name="contact" onChange={handlechange}/>
        <Input w="280px" mt="10px" border="2px" placeholder='Departure-City' name="city" onChange={handlechange}/>

        <Select w="290px" mt="10px" border="2px" ml="10px" pr="8px" placeholder='Select Adults' color="grey" name="adult" onChange={handlechange}>
        <option value="2" name="adult">2</option>
        <option value="3" name="adult">3</option>
        <option value="4" name="adult">4</option></Select>
        <Select w="290px" mt="10px" border="2px"  ml="10px" pr="8px" placeholder='Select Children' color="grey" name="children" onChange={handlechange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option></Select>
        <Select w="290px" mt="10px" border="2px" ml="10px" pr="8px" placeholder='Select Type of room' color="grey" name="room"  onChange={handlechange}>
        <option value="Deluxe room">Deluxe Room</option>
        <option value="Standard room">Standard Room</option>
        <option value="Dorm beds x1">Dorm Beds x1</option>
        <option value="Deluxe room x2">Deluxe room x2</option></Select>
        <Input w="280px" mt="10px" border="2px" ml="5px"  type="Date" color="grey" name="date" onChange={handlechange}/>

       <Flex w="80%" m="auto" mt="20px"> <Text fontWeight="bold">Amount :</Text><Spacer/><Text fontSize="14px" mt="10px" color="grey">Starting from ₹ <Text fontWeight="bold" color="crimson">{initprice}</Text></Text></Flex>

       <Text fs="16px" c="grey" mt="10px">Taxes and discounts are calculated at checkout.</Text>
       <Input bg="cornflowerblue" w="280px" h="60px" mt="10px" color="white" type="submit" fontWeight={"bold"} placeholder="Next" />
       
    </form>
  
    </Flex>
    
    
    </div></Box></Flex>  <hr/> </div>
  )
}

export default Singlepackagepage