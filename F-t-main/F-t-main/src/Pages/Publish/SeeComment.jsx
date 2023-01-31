import React, { useState } from 'react'
import { SimpleGrid,Text, Box,FormControl, Grid, GridItem, Image, Input,Button,Flex,Heading,Spacer,Container, useBreakpointValue} from '@chakra-ui/react'

import {FcLikePlaceholder} from "react-icons/fc"
import {AiFillFacebook} from "react-icons/ai"
import Des from '../../Component/Footer/Comment_box'
import Nidhi from "../../Component/assests/Nidhi.jpeg"
import {FaPeriscope} from "react-icons/fa"

import { useEffect } from 'react'
import { Ftr } from '../../Component/Ftr'
import { Link } from 'react-router-dom'
// import { Box, Button, Flex, Heading, Image, Input, Spacer, Text } from '@chakra-ui/react'
const See = () => {

const[title,setTitle]=useState()

useEffect(()=>{
const e=localStorage.getItem("inputTitle");
setTitle(e)
},[]
)


  return (
    <>
    <Grid gridTemplateColumns='70% 30%' gap={6} h="200px" w="70%" m="auto" mt={5} >
    <GridItem w='100%' h='500' >
    <SimpleGrid columns={1} spacing={1}>
    <Box mt={2} ml={2}>
    <Link to="/" >
        <Image src={Nidhi}/>
      </Link>
        </Box >
  <Box height='30px' mt={4}>
  <Input value={title} />
  </Box>
  <Box bg='blue.50' height='70px' mt='5' display="flex" gap={6} >
    <Box display="flex" gap={400}>
    
      <Image src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' alt='Logo' h='14' w='14' borderRadius='60%'/>
   
    <FcLikePlaceholder size={40}  />
    {/* <AiFillFacebook/> */}
    
    </Box>
    <AiFillFacebook size={40} color="blue"/> 
  </Box>
 
</SimpleGrid>
 <Box height='auto' border="1px solid grey" mt={4} borderRadius="12px">
 <Des />
</Box> 
    </GridItem>



 


<Box  height='auto' border="0px solid red" ></Box>


<br/>
<br/>
<br/>
<br/>
{/* <Container display="flex"   gap={10}>
<Box h="400px" w="300px" >
    <Image src="https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1670311543_20.jpg" borderRadius="10px" w="500px" h="150px"/>
    <Heading size="20px" mt="10px">Bali Christmas Special Packages</Heading>
    <Flex mt="10px"><Flex><Box pt="5px"><FaPeriscope color="teal"  />
    </Box><Text ml="5px" color="teal" fontWeight="bold">Christmas</Text> </Flex><Spacer/>
    <Button bg="teal" width="60px" height="20px" borderRadius="10px">3D-2N</Button></Flex>
    <Flex mt="10px"><Flex><Text>₹ 40,000/ </Text><Text color="grey" ml="10px">Person</Text></Flex><Spacer/> <Button border="1px" borderColor="Teal" width="80px" color="teal" fontSize="14px">Get Quotes</Button></Flex>
</Box>
<Box h="400px" w="400px" border="0px solid red" >
    <Image src="https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1654841207_k3_3.jpg" borderRadius="10px" border="0px solid red"  w="500px" h="150px"/>
    <Heading size="20px" mt="10px">Meghalaya Christmas Special Packages</Heading>
    <Flex mt="10px"><Flex><Box pt="5px"><FaPeriscope color="teal"  />
    </Box><Text ml="5px" color="teal" fontWeight="bold">Christmas</Text> </Flex><Spacer/>
    <Button bg="teal" width="60px" height="20px" borderRadius="10px">5D-4N</Button></Flex>
    <Flex mt="10px"><Flex><Text>₹ 13,000/ </Text><Text color="grey" ml="10px">Person</Text></Flex><Spacer/> <Button border="1px" borderColor="Teal" width="80px" color="teal" fontSize="14px">Get Quotes</Button></Flex>
</Box>
<Box h="400px" w="250px" >
    <Image src="https://cdn1.tripoto.com/media/filter/tst/img/1691556/Image/1670545068_2.jpg" borderRadius="10px" w="500px" h="150px"/>
    <Heading size="20px" mt="10px">Split Valley Christmas Special Packages</Heading>
    <Flex mt="10px"><Flex><Box pt="5px"><FaPeriscope color="teal"  />
    </Box><Text ml="5px" color="teal" fontWeight="bold">Christmas</Text> </Flex><Spacer/>
    <Button bg="teal" width="60px" height="20px" borderRadius="10px">3D-2N</Button></Flex>
    <Flex mt="10px"><Flex><Text>₹ 28,000/ </Text><Text color="grey" ml="10px">Person</Text></Flex><Spacer/> <Button border="1px" borderColor="Teal" width="80px" color="teal" fontSize="14px">Get Quotes</Button></Flex>
</Box>
<Box h="400px" w="250px" >
    <Image src="https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1670916553_b8.jpg" borderRadius="10px" w="500px" h="150px"/>
    <Heading size="20px" mt="10px">Bhutan Christmas Special Packages</Heading>
    <Flex mt="10px"><Flex><Box pt="5px"><FaPeriscope color="teal"  />
    </Box><Text ml="5px" color="teal" fontWeight="bold">Christmas</Text> </Flex><Spacer/>
    <Button bg="teal" width="60px" height="20px" borderRadius="10px">3D-2N</Button></Flex>
    <Flex mt="10px"><Flex><Text>₹ 18,000/ </Text><Text color="grey" ml="10px">Person</Text></Flex><Spacer/> <Button border="1px" borderColor="Teal" width="80px" color="teal" fontSize="14px">Get Quotes</Button></Flex>
</Box>

</Container> */}



  
</Grid>
<Box mt={600}></Box>
<Flex flexDir={"column"} alignItems={"center"}>
 <Flex alignItems={'flex-start'}  width={"84%"} margin={1}>
    <Text fontSize={useBreakpointValue({ base: '2xl', md: '3xl' ,sm:"xl"})} fontWeight={'bold'}>
    Plan Your Next Trip Using Tripoto's Complete Destination Guides
    </Text>
    </Flex>
    <Flex width={"84%"} display={{lg:"flex", md: 'box',sm:'box' }} margin={4} flexDir='row' gap='8'>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669205399_germany.jpeg' alt='img2' />
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} src='https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1613732480_4_4.jpg' alt='img2' />
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} src='https://cdn1.tripoto.com/media/filter/tst/img/1756031/Image/1599216481_rajasthan.jpg' alt='img2' />
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} src='https://cdn1.tripoto.com/media/filter/tst/img/1756031/Image/1599216560_kerala.jpg' alt='img2' />
      </Flex>
    </Flex>
    </Flex>
<br/>
<br/>
  </>
  
  )
}

export default See