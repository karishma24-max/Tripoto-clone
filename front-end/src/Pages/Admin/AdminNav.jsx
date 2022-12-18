import { Box, Flex, Img, Button, Hide } from "@chakra-ui/react";
import React from "react";
 
import { TbPencil } from "react-icons/tb";
import { FiHeart } from "react-icons/fi";
import { AiOutlineBell } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

export const AdminNav =()=>{
    return <>
    
    <Box
      position={{ md: "static", lg: "sticky" }}
      top="0"
      bg="#2f9bdb"
      zIndex={100}
      mt="20px"
      h="80px"
    >
      <Box w="63%" margin="auto">
        <Flex justify="space-between" alignItems="center">
          <Box>
            <Link to={"/"}>
              {/* <Img src={logo} mt={3} w={"100%"} height="60px" /> */}
            </Link>
          </Box>
          <Flex gap="15px" alignItems="center" fontWeight="bold">
            <Link to="/Listofusers">
            <Box
              display="flex"
              cursor="pointer"
              ml="10px"
              p="10px 15px"
              border="none"
              borderRadius="15px"
              _hover={{ bg: "#e3f0e3" }}
            >
              <TbPencil fontSize="20px" /> UserList
            </Box>
            </Link>
            <Hide below="md">
              <Link to="/">
              <Box
                display="flex"
                cursor="pointer"
                ml="10px"
                p="10px 15px"
                border="none"
                borderRadius="15px"
                _hover={{ bg: "#e3f0e3" }}
              >
                <FiHeart fontSize="20px" /> Home
              </Box>
              </Link>
              <Link to ="/adminQuerry">
              <Box
                display="flex"
                cursor="pointer"
                ml="10px"
                p="10px 15px"
                border="none"
                borderRadius="15px"
                _hover={{ bg: "#e3f0e3" }}
              >
                <AiOutlineBell fontSize="20px" />Querry
              </Box>
              </Link>
            </Hide>
            
          </Flex>
        </Flex>
      </Box>
    </Box>
 
    
    </>
 }