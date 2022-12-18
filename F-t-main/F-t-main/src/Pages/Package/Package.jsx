import { Alert, AlertIcon, Box, Button, Flex, Heading, Image, Input, Spacer, Text, Toast, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import "../Package/package.css"
import {AiOutlineSearch} from "react-icons/ai"
import {FaPeriscope} from "react-icons/fa"
import axios from "axios"
import Tour from './Tour'
import { Link, Navigate, useNavigate } from 'react-router-dom'
const Package = () => {
const [mindful,setMindful]=useState([])
const toast = useToast()
const [domestic,setDomestic]=useState([])
const [international,setInternational]=useState([])
const [honeymoon,setHoneymoon]=useState([])
const [searchcity,setSearchcity] = useState("")
const [tempid,setTempid]=useState(0)
const navigate=useNavigate()
useEffect(()=>{
axios.get("https://tripper-host.onrender.com/mindful").then(res=>setMindful(res.data))
axios.get("https://tripper-host.onrender.com/domestic").then(res=>setDomestic(res.data))
axios.get("https://tripper-host.onrender.com/international").then(res=>setInternational(res.data))
axios.get("https://tripper-host.onrender.com/honeymoon").then(res=>setHoneymoon(res.data))



},[])

const handlesearch=(e)=>{
    let count=0
    e.preventDefault()
    console.log(searchcity)
    console.log(honeymoon)
honeymoon.map((ele)=> 
{ if((ele.location)==searchcity){
    console.log(ele)
    navigate (`/packages/${ele.id}`)
    count++
}

})
if(count==0)
{
    toast({
        title: 'Sorry,this package is not included yet',
        position:'top',
       bg:'red',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })

}



// setInterval(()=>{
//     navigate (`/packages/${tempid}`)
// },2000)

}

  return (
    <div><div className="front_kiya">
    <Heading color="white" >Exclusive Tours & Holiday Packages</Heading>
        <Input  type="Search" borderRightRadius="0px" width={{lg:'550px' ,md:"400",sm:"200px"}} h="50px" bg="white" Placeholder="Search Packages for Destinations " mt="10px" onChange={(e)=>setSearchcity(e.target.value) }/> <Button ml="-6px" mb="5px" borderRightRadius="5px" borderRadius="0px" bg="white" height="50px" onClick={(e)=>handlesearch(e)}><AiOutlineSearch w="100px"/></Button>
        <Flex display={{lg:"flex", md: 'box',sm:'box' }} justifyContent="center"><Button ml="10px" mt="20px" borderRadius="20px" color="cornflowerblue"  border="2px" borderColor='cornflowerblue'>Stay With Activities</Button><Button color="cornflowerblue"  border="2px" borderColor='cornflowerblue' ml="10px" mt="20px" borderRadius="20px">Destinations Packages</Button><Button color="cornflowerblue"  border="2px" borderColor='cornflowerblue' ml="10px" mt="20px" borderRadius="20px">Rajasthan</Button><Button color="cornflowerblue"  border="2px" borderColor='cornflowerblue' ml="10px" mt="20px" borderRadius="20px">Manali</Button></Flex>
        <div><Button color="cornflowerblue"  border="2px" borderColor='cornflowerblue' ml="10px" mt="10px" borderRadius="20px">Himanchal</Button><Button color="cornflowerblue"  border="2px" borderColor='cornflowerblue' ml="10px" mt="10px" borderRadius="20px">Uttarakhand</Button><Button color="cornflowerblue"  border="2px" borderColor='cornflowerblue' ml="10px" mt="10px" borderRadius="20px">Rishikesh</Button></div>
    </div>
    
    <div className="trip-kiya">
        <Heading>Tripoto's Mindful Retreats</Heading>
        <div className='trip-info'>
        <Flex justifyContent="space-around" mt="10px" display={{lg:"flex", md: "box",sm:"box"}}>
        {mindful.map((ele)=><Link to={`/packages/${ele.id}`}>
        <Tour key={ele.id} id={ele.id} title={ele.title} price={ele.price} location={ele.location} image={ele.main_image}/>
        </Link>)}</Flex></div>
    </div>

     <div className="trip-kiya">
        <Heading>Explore These Trending Domestic Tour Packages</Heading>
        <Text>Need help in planning a perfect travel experience in India? Tripoto has curated several travel packages covering some of the most popular holiday destinations for you!

</Text>
        <div className='trip-info'> <Flex justifyContent="space-around" mt="10px" display={{lg:"flex", md: 'box',sm:'box' }}>
        {domestic.map((ele)=><Link to={`/packages/${ele.id}`}><Tour key={ele.id} id={ele.id} title={ele.title} price={ele.price} location={ele.location} image={ele.main_image}/></Link>)}</Flex></div>
    </div>
    
    <div className="trip-kiya">
        <Heading>Explore These Trending International Tour Packages</Heading>
        <Text>Planning to travel abroad and wondering where to find the best international tour packages? From the cinematic landscapes of Switzerland to the glorious sunkissed beaches of Bali – our collection of handpicked travel packages would solve almost every traveller's dilemma.</Text>
        <div className='trip-info'> <Flex justifyContent="space-around" mt="10px" display={{lg:"flex", md: 'box',sm:'box' }}>
        {international.map((ele)=><Link to={`/packages/${ele.id}`}><Tour key={ele.id} id={ele.id} title={ele.title} price={ele.price} location={ele.location} image={ele.main_image}/></Link>)}</Flex></div>
    </div>
    
    <div className="trip-kiya">
        <Heading>Romantic Honeymoon Tour Packages</Heading>
        <Text>No matter whether you plan to explore the mountains and valleys with your BAE or soak in the sunshine by the beaches, Tripoto's Honeymoon Packages have got you covered!</Text>
        <Flex mt="10px" justifyContent="space-around" display={{lg:"flex", md: 'box',sm:'box' }}>
<Box h="400px" w="250px" >
    <Image src="https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1670312702_meghalaya_b_1.png" borderRadius="10px" w="250px" h="200px"/>
    <Heading size="20px" mt="10px">Meghalaya Christmas Special Packages</Heading>
    <Flex mt="10px"><Flex><Box pt="5px" ><FaPeriscope color="teal"  />
    </Box><Text ml="5px" color="teal" fontWeight="bold">Christmas</Text> </Flex><Spacer/>
    <Button bg="teal" width="60px" height="20px" borderRadius="10px">5D-4N</Button></Flex>
    <Flex mt="10px"><Flex><Text>₹ 42,000/ </Text><Text color="grey" ml="10px">Person</Text></Flex><Spacer/> <Button border="1px" borderColor="Teal" width="80px" color="teal" fontSize="14px">Get Quotes</Button></Flex>
</Box>
<Box h="400px" w="250px" >
    <Image src="https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1670355254_k1.jpg" borderRadius="10px" w="250px" h="200px"/>
    <Heading size="20px" mt="10px">Kerala Christmas Special Packages</Heading>
    <Flex mt="10px"><Flex><Box pt="5px"><FaPeriscope color="teal"  />
    </Box><Text ml="5px" color="teal" fontWeight="bold">Christmas</Text> </Flex><Spacer/>
    <Button bg="teal" width="60px" height="20px" borderRadius="10px">6D-5N</Button></Flex>
    <Flex mt="10px"><Flex><Text>₹ 34,000/ </Text><Text color="grey" ml="10px">Person</Text></Flex><Spacer/> <Button border="1px" borderColor="Teal" width="80px" color="teal" fontSize="14px">Get Quotes</Button></Flex>
</Box>
<Box h="400px" w="250px" >
    <Image src="https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1670311543_20.jpg" borderRadius="10px" w="250px" h="200px"/>
    <Heading size="20px" mt="10px">Bali Christmas Special Packages</Heading>
    <Flex mt="10px"><Flex><Box pt="5px"><FaPeriscope color="teal"  />
    </Box><Text ml="5px" color="teal" fontWeight="bold">Christmas</Text> </Flex><Spacer/>
    <Button bg="teal" width="60px" height="20px" borderRadius="10px">3D-2N</Button></Flex>
    <Flex mt="10px"><Flex><Text>₹ 40,000/ </Text><Text color="grey" ml="10px">Person</Text></Flex><Spacer/> <Button border="1px" borderColor="Teal" width="80px" color="teal" fontSize="14px">Get Quotes</Button></Flex>
</Box>
<Box h="400px" w="250px" >
    <Image src="https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1654841207_k3_3.jpg" borderRadius="10px" w="250px" h="200px"/>
    <Heading size="20px" mt="10px">Meghalaya Christmas Special Packages</Heading>
    <Flex mt="10px"><Flex><Box pt="5px"><FaPeriscope color="teal"  />
    </Box><Text ml="5px" color="teal" fontWeight="bold">Christmas</Text> </Flex><Spacer/>
    <Button bg="teal" width="60px" height="20px" borderRadius="10px">5D-4N</Button></Flex>
    <Flex mt="10px"><Flex><Text>₹ 13,000/ </Text><Text color="grey" ml="10px">Person</Text></Flex><Spacer/> <Button border="1px" borderColor="Teal" width="80px" color="teal" fontSize="14px">Get Quotes</Button></Flex>
</Box>
        </Flex>


<Heading mt="10px"> Customizable Tour Packages</Heading>
<Text mt="10px">Need help in getting a perfect travel experience according to your need? Tripoto has curated several travel packages covering some of the most popular holiday destinations for you!</Text>
<Flex justifyContent="space-around" mt="10px" display={{lg:"flex", md: 'box',sm:'box' }} ><Image ml="-15px" mt="10px" src="https://cdn1.tripoto.com/media/filter/tst/img/1789711/Image/1597313001_coup.jpg" w={{lg:"30%",md:'100%',sm:'100%'}} borderRadius="10px"/>
<Image src="https://cdn1.tripoto.com/media/filter/tst/img/1789711/Image/1597742263_f.jpg" mt="10px" w={{lg:"30%",md:'100%',sm:'100%'}} borderRadius="10px"/>
<Image src="https://cdn1.tripoto.com/media/filter/tst/img/1789711/Image/1597312306_budget.jpg" mt="10px" w={{lg:"30%",md:'100%',sm:'100%'}} borderRadius="10px"/>

 </Flex> 
 
 <Heading mt="30px">Discover the best tour packages on Tripoto</Heading>
 <Text mt="10px" fontSize="17px">We all need to get out of our routine and hit the road every once in a while to experience the magic of travel. Tripoto offers some of the best tour packages and customised holidays in India and abroad to help you unwind and discover the world. On offer are a range of travel destinations which are perfect for a trip with family or friends. Solo travellers can chose from a range of treks and tour packages in budget friendly destinations in India and around the world. Holiday packages on Tripoto are handpicked to cater to a variety of travel styles and requirements.</Text>
 
 <Heading mt="30px">Where should you go?</Heading>
 <Text mt="10px" fontSize="17px">Browse through hundreds of holiday packages on Tripoto for some of the best selection of destinations and activities. Go island hopping in Andaman or go skydiving in Spain. Explore the national parks of Kenya or laze along the backwaters of Kerala.
<br/>
<Text mt="10px" fontSize="17px">Destinations like Dubai, Thailand, Andaman & Nicobar Islands, Ladakh, Sikkim, Goa, Singapore are the top favourites year round and are always in demand. If you are looking for something offbeat, we also have packages for destinations like Meghalaya and many more.

Explore the world of travel with Tripoto and book yourself the adventure you've always wanted!</Text></Text>

<Heading mt="30px">How to book holidays with Tripoto?
</Heading>
<Text mt="10px" fontSize="17px">Booking holidays on Tripoto is as easy as it gets. Pick from hundreds of packages. We will then connect you with your choices of travel providers via email and/or phone. Tripoto partners with leading travel companies in India, like MakeMyTrip, Thomas Cook, SOTC, Yatra, to name a few, to help you plan the perfect vacation.</Text>


<Text mt="30px" fontSize="17px"> Here is the step-by-step guide to booking domestic or international packages on Tripoto.</Text>
 <Flex mt="10px"><Text fontWeight="bold" fontSize="17px">Step 1:</Text><Text ml="5px" fontSize="17px"> Click on the 'Book Holidays' button on the top right corner of any page on Tripoto.</Text>
 </Flex>
 <Flex><Text fontWeight="bold" fontSize="17px">Step 2:</Text><Text ml="5px" fontSize="17px"> You will be taken to a page with different categories of packages.</Text>
 </Flex>
 <Flex><Text fontWeight="bold" fontSize="17px">Step 3:</Text><Text  fontSize="16px" ml="5px">Click on any package to submit your requirements. We will attend to your query and put you in touch with a representative from our travel partners within 48 hours.</Text>
 </Flex>

 <Heading mt="40px" fontSize="17px">Why book holidays with Tripoto?</Heading>
 <Text mt="10px" fontSize="17px" mb="150px">Tripoto'sTripoto's travel partners provide some of the best India tour packages and International tour packages. We are passionate about travel and strive to offer experiences that matter. We have a team of experienced travellers who can help you curate & plan the ideal getaway!</Text>
<hr/>
 </div>


    
    </div>
  )
}

export default Package