import React, { useState } from 'react'
import { SimpleGrid,Text, Box,Button, Grid, GridItem, Image, Input,ButtonGroup,IconButton} from '@chakra-ui/react'
import Nidhi from "../../Component/assests/Nidhi.jpeg"
import {SlCalender} from "react-icons/sl"
import {HiOutlineCurrencyRupee} from "react-icons/hi"
import {BiTimeFive} from "react-icons/bi"
import { Link } from 'react-router-dom'

const Publish = () => {

const [input,setInput]=useState()

const changeHandle=(e)=>{

  setInput(e.target.value)
 
}
const clickHandle=()=>{
  console.log('click for save inputTilte')
  localStorage.setItem("inputTitle", input);

  }
  return (
    <Grid gridTemplateColumns='70% 30%' gap={6} h="auto" w="70%" m="auto" >
    <GridItem w='100%' h='500' >
    <SimpleGrid columns={1} spacing={1}>
    <Box mt={2} ml={2}>
        <Image src={Nidhi}/>
        </Box >
  <Box height='30px' mt={4}>
  <Input  onChange={changeHandle} placeholder='Add An Impressive Title To Your Trip'/>
  </Box>
  <Box bg='blue.50' height='70px' mt='5'>
    <Box><Image src='data:image/jpeg;base64,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' alt='Logo' h='14' w='14' borderRadius='50%'/></Box>
    <Box> <span></span></Box>
  </Box>
  <Box height='30px' mt={4}>
  <Input placeholder='Tell a story' h={100} border={"none"}/>
  </Box>
  <Box  height='350px'></Box>
  
</SimpleGrid>

    </GridItem>
    <SimpleGrid>


<Grid w='100%'  mt={0}   border="1px solid grey" gridTemplateRows="repeate(1,1fr)">

<Box  className='trip_status' w='90%' border="0px solid grey" m="auto" mt={5} mb={3} borderRadius={5} bg='blue.50'>

<Box m="auto" >
<Box display="flex" justifyContent="space-between" >
<Text fontSize='14px' fontFamily="circularairpro-bold,Helvetica,Arial,sans-serif" fontWeight="bold">Trip Status</Text>
<Button mr={5} bg="orange" h={7} mb={2}>Draft</Button>
</Box>
<Box display="flex" gap={4}>
<Text fontSize={14}>Setting Privacy</Text>
<ButtonGroup size='sm' isAttached variant='outline'>
  <Button bg='blue.500' borderLeftRadius="40%">Public</Button>

  <Button borderRightRadius="40%" >Private</Button>
</ButtonGroup>
</Box>

<Button w='100%' colorScheme='blue' m="auto" mt={4}  >Publish</Button>
</Box>
</Box>

<GridItem w='90%' bg='blue.50'  border="0px solid red" m="auto" mb={5} >
<Box  className='trip_status' w='90%' border="0px solid grey" m="auto" mt={5} mb={3} borderRadius={5} bg='blue.50'>
<Text fontSize='14px' fontFamily="circularairpro-bold,Helvetica,Arial,sans-serif" fontWeight="bold"mb={19}>Trip Detail</Text>
<Box mt={-4} display="flex" justifyContent="space-between">
   
<SlCalender  />
<Text  ml={2} fontSize='14px' fontFamily="circularairpro-bold,Helvetica,Arial,sans-serif">Add start date to your trip to tell readers more about the time of the year.</Text>


</Box>
<Box mt={-2} display="flex"  justifyContent="space-between" >
<BiTimeFive />
<Text  ml={2} fontSize='14px' fontFamily="circularairpro-bold,Helvetica,Arial,sans-serif">Add duration to your trip to tell readers more about the total time of the trip.</Text>
</Box>
<Box mt={-2} display="flex" justifyContent="space-between" >
<HiOutlineCurrencyRupee  />
<Text   fontSize='14px'  mr={8} fontFamily="circularairpro-bold,Helvetica,Arial,sans-serif">How much this trip cost you?</Text>

</Box>
<Button color='blue' m="auto" mt={4} ml={93} border="none">Add details</Button>
</Box>
</GridItem>
<GridItem w='90%' bg='blue.50'  border="0px solid red" m="auto"mb={5} >
<Box  className='trip_status' w='90%' border="0px solid grey" m="auto" mt={5} mb={3} borderRadius={5} bg='blue.50'>

<Box m="auto" >
<Text fontSize='14px' fontFamily="circularairpro-bold,Helvetica,Arial,sans-serif" fontWeight="bold"mb={19}>Gallery(0)</Text>
<Text  fontSize='14px'  mr={8} fontFamily="circularairpro-bold,Helvetica,Arial,sans-serif">Click on + icon to add images to your trip.</Text>


</Box>
</Box>
</GridItem>
<GridItem w='90%' bg='blue.50'  border="0px solid red" m="auto" >
<Box  className='trip_status' w='90%' border="0px solid grey" m="auto" mt={1} mb={3} borderRadius={5} bg='blue.50'>

<Box m="auto" >
<Text fontSize='14px' fontFamily="circularairpro-bold,Helvetica,Arial,sans-serif" fontWeight="bold"mb={19}>Location(0)</Text>
<Text  fontSize='14px'  mr={8} fontFamily="circularairpro-bold,Helvetica,Arial,sans-serif">Click on + icon to add locations to your trip.</Text>


</Box>

</Box>
</GridItem>
</Grid>
 <Link to="/comment"><Button color='blue' m="auto" onClick={clickHandle} ml={93} border="none" mt={4}>Save and Preview</Button> 

</Link>
</SimpleGrid>

 
  </Grid>
  )
}

export default Publish