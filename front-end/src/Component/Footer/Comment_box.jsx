import React from 'react'
import  { useState } from 'react'
import { Textarea,Button,Box,Text} from '@chakra-ui/react'
 
 import {FaRegCommentDots} from "react-icons/fa"


const Des = () => {
const[comment,setComment]=useState("")
const[comments,setComments]=useState([])

const date = new Date();
    const showTime = date.getHours() 
        + ':' + date.getMinutes() 
       

const clickHandle=()=>{
  setComments((comments)=>[...comments,comment])
  setComment("")
  }
  const changeHandle=(e)=>{

    setComment(e.target.value)
   
  }
  

  return (
    <div className='main-con'>
   
   <Box>
    <Text  mt={5} ml={3}>Add a Comment</Text>
    <Textarea w="90%" mt={11} ml={3} value={comment} 
 onChange={changeHandle}
 
 />
<Button  mt={5}  marginLeft={660}  bg="blue.500" onClick={clickHandle} className='comment-button'>Post</Button>
{comments.map((text)=>(
     <Box border="0px solid red"   display="flex" gap={4} ml={33} h={20}>
       
      <FaRegCommentDots size={30} color="blue"/>  {text}
     
     < h3 size={20}  mt={50} ml={5}>{showTime}pm</h3> 
        </Box> 
        
        
    ))}
   </Box>
    </div>
  )
}

export default Des