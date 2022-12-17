

import { Box, Image, SimpleGrid, VStack } from '@chakra-ui/react'
import React from 'react'
import{FaInstagram,FaFacebookSquare,FaTwitterSquare,FaYoutube,FaPinterestSquare,FaSatelliteDish} from "react-icons/fa"

export const Ftr = () => {
  return (



             <SimpleGrid  columns={[1,2,3,4,5]}  >
            <Box>
              <Box align={"stretch"}>
                <Box><Image src='https://cdn1.tripoto.com/assets/2.9/img/logo/header-blue.svg'/></Box>
                <Box fontSize="10px" h="10px">India's Largest Travel Community</Box>
                <Box mt="1rem" display="flex" gap={1}>
                  <FaFacebookSquare cursor="pointer" size={25}/>
                  <FaTwitterSquare cursor="pointer" size={25}/>
                  <FaInstagram cursor="pointer" size={25}/>
                  <FaYoutube cursor="pointer" size={25}/>
                <FaPinterestSquare cursor="pointer" size={25}/>
                <FaSatelliteDish cursor="pointer"  size={25}/>
                </Box>
                <Box mt="1rem" ml="1rem"><Image cursor="pointer" w="120px" h="60px" src='https://cdn1.tripoto.com/assets/2.9/img/logo/download-android-app.svg' /></Box>
              </Box>
            </Box>
            <Box>
              <VStack mt="20px" align='stretch'>
                <Box fontWeight="500" fontSize="18px">About Tripoto</Box>
                <Box h="14px" cursor="pointer" fontSize="16px">How It Works</Box>
                <Box h="14px" cursor="pointer" fontSize="16px">FAQ’s</Box>
                <Box h="14px" cursor="pointer" fontSize="16px">Privacy Policy</Box>
                <Box h="14px" cursor="pointer" fontSize="16px">Terms & Conditions</Box>
                <Box h="14px" cursor="pointer" fontSize="16px">Careers</Box>
                <Box h="14px" cursor="pointer" fontSize="16px">Contact Us</Box>
              </VStack> 
            </Box>
            <Box>
            <VStack mt="20px" align='stretch'>
                <Box fontWeight="500" fontSize="18px">Products</Box>
                <Box h="14px" cursor="pointer" fontSize="16px">Travel Guides</Box>
                <Box h="14px" cursor="pointer" fontSize="16px">Trips & Itineraries</Box>
                <Box h="14px" cursor="pointer" fontSize="16px">Weekend Getaways</Box>
                <Box h="14px" cursor="pointer" fontSize="16px">Places to Visit</Box>
                <Box h="14px" cursor="pointer" fontSize="16px">Other Travel Categories</Box>
                <Box h="14px" cursor="pointer" fontSize="16px">Tripoto Forum</Box>
                <Box h="14px" cursor="pointer" fontSize="16px">Honeymoon Packages </Box>
                <Box h="14px" cursor="pointer" fontSize="16px">Tour Packages</Box>
              </VStack>
            </Box>
            <Box>
            <VStack mt="20px" align='stretch'>
                <Box  fontWeight="500" fontSize="18px">Important Travel Links</Box>
                <Box h="14px" cursor="pointer" fontSize="16px">Goa Tourism</Box>
                <Box h="14px" cursor="pointer" fontSize="16px">Dubai Tourism</Box>
                <Box h="14px" cursor="pointer" fontSize="16px">Singapore Tourism</Box>
                <Box h="14px" cursor="pointer" fontSize="16px">Kerala Tourism</Box>
                <Box h="14px" cursor="pointer" fontSize="16px">Manali Tourism</Box>
                <Box h="14px" cursor="pointer" fontSize="16px">Bali Tourism</Box>
                <Box h="14px" cursor="pointer" fontSize="16px">Sri Lanka Tourism</Box>
                <Box h="14px" cursor="pointer" fontSize="16px">Honeymoon Destinations In India </Box>
              </VStack>
            </Box>
            <Box>
              <VStack mt="20px" align='stretch'>
                <Box fontWeight="500" fontSize="18px">Partner Programs</Box>
                <Box h="14px" cursor="pointer" fontSize="16px">Buy Travel Leads</Box>
                <Box h="14px" cursor="pointer" fontSize="16px">Partner With Us</Box>
                <Box h="14px" cursor="pointer" fontSize="16px">Earn Credits</Box>
                <Box h="14px" cursor="pointer" fontSize="16px">Get Paid To Travel</Box>
                <Box h="14px" cursor="pointer" fontSize="16px">Import Blog To Itinerary</Box>
              </VStack>
            </Box>
            </SimpleGrid > 
  )
}
