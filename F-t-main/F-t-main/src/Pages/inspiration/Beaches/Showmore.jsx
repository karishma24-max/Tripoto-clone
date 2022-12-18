import React,{useState} from "react"
import { Collapse,Button,Center } from '@chakra-ui/react'
import { ChakraProvider } from "@chakra-ui/react"
function Showmore() {
    const [show, setShow] = useState(false)
  
    const handleToggle = () => setShow(!show)
  
    return (
      <>
      <ChakraProvider>
        <Collapse startingHeight={42} in={show}>
        Sand, waves and wind make a perfect getaway from the hustle bustle of city life.
        Beaches can make anyone happy. Just take a beach vacation anywhere in the world and you will find your happiness in the waves.
        You can choose from a variety of destinations for your next beach holiday in India or anywhere. 
        Pick a beach resort according to your budget and spend time with the family or go for a solo trip on picture perfect shores that nature has blessed us with.
        Enjoy the sunrise, go for water sports or just sit idle on sandy floors of these beautiful beaches.
        </Collapse>
        <Center>
        <Button style={{color:"blue",backgroundColor:"white"}} size='sm'  onClick={handleToggle} mt='1rem'>
          Show {show ? 'Less' : 'More'}
        </Button>
        </Center>
        </ChakraProvider>
      </>
    )
  }
  export default Showmore