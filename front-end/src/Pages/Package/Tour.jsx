import { Box, Button, Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { FaPeriscope } from 'react-icons/fa'

const Tour = ({id,title,price,location,image}) => {
  return (
    <div><Box h="400px" w="250px" >
    <Image src={image} borderRadius="10px" w="250px" h="200px"/>
    <Heading size="20px" mt="10px">{title}</Heading>
    <Flex mt="10px"><Flex><Box pt="5px"><FaPeriscope color="teal"  />
    </Box><Text ml="5px" color="teal" fontWeight="bold">{location}</Text> </Flex><Spacer/>
    <Button bg="teal" width="60px" height="20px" borderRadius="10px">6D-5N</Button></Flex>
    <Flex mt="10px"><Flex><Text>{price}/ </Text><Text color="grey" ml="10px">Person</Text></Flex><Spacer/> <Button border="1px" borderColor="Teal" width="80px" color="teal" fontSize="14px">Get Quotes</Button></Flex>
</Box></div>
  )
}

export default Tour