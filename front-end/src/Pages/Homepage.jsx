import React from 'react'
import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Input,
  InputRightElement,
  InputGroup,
  Icon,
  Image,
  Link,
  Button,
  Spacer,
  Avatar,
  Divider,
} from '@chakra-ui/react';
import{BiSearch, BiMap} from "react-icons/bi"
import{MdVerified} from "react-icons/md"


function Homepage() {
  return (
    // <Container maxW='full'>
    <div>
     <Flex width={"100%"} flexDir={'column'}> 
    <Flex
    width={'100%'}
    h={'350px'}
    backgroundImage={
      'url(https://cdn1.tripoto.com/assets/2.9/img/home_banner_road.jpg)'
    }
    backgroundSize={'cover'}
    backgroundPosition={'center center'}>
    <VStack
      w={'100%'}
      justify={'center'}
      px={useBreakpointValue({ base: 4, md: 8 })}
      bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
      <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
        <Text
          color={'white'}
          fontWeight={700}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: '2xl', md: '3xl' ,sm:"xl"})}>
          India's Largest Community of Travellers        
          </Text>
        <Stack spacing={4}>
        <InputGroup backgroundColor={'white'} width={{lg:'550px' ,md:"400px",sm:"300px"}}>
          <Input size='lg' placeholder='Search for itineraries, destination, hotels or activities' />
          <InputRightElement size='lg' children={<Icon as={BiSearch} boxSize={6}/>} />
        </InputGroup>

        </Stack>
      </Stack>
    </VStack>
  </Flex>


  <Flex width={'100%'} flexDir={'column'} alignItems={'center'}>
    <Flex width={"84%"} alignItems={'flex-start'}>
      <Text  fontSize='xs' color={'gray.500'}>SPONSORED</Text>
    </Flex>
    <Flex width={"100%"} alignItems={'center'} flexDir={"column"}>
    <Image width={"75%"} src='https://tpc.googlesyndication.com/simgad/968686610659141041' alt='img1' />
    </Flex>
    <Flex width={"84%"} alignItems={'center'} display={{lg:"flex", md: 'box',sm:'box' }}  flexDir='row' gap='2' margin={'10'}>
    <Image width={{lg:'25%', md:"80%", sm:"80%"}} height={'5rem'} src='https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192329_aa.png' alt='img1' />
    <Image width={{lg:'25%', md:"80%", sm:"80%"}} height={'5rem'} src='https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192307_cc.png' alt='img1' />
    <Image width={{lg:'25%', md:"80%", sm:"80%"}} height={'5rem'} src='https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192273_bb.png' alt='img1' />
    <Image width={{lg:'25%', md:"80%", sm:"80%"}} height={'5rem'} src='https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192344_dd.png' alt='img1' />
    </Flex>
    
    <Flex alignItems={'flex-start'} width={"84%"} margin={1}>
    <Text fontSize={useBreakpointValue({ base: '2xl', md: '3xl' ,sm:"xl"})} fontWeight={'bold'}>
    In the Spotlight: Partnerships
    </Text>
    </Flex>
    <Flex width={"84%"} alignItems={'center'} display={{lg:"flex", md: 'box',sm:'box' }} flexDir='row' gap='8'>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} height='165px' src='https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1670839402_2020_rws_acw_kv3_sharktank_4355_lr.jpg' alt='img2' />
        <Text  color={'tomato'} fontSize="xs" fontWeight={"bold"}>RESORTS WORLD SENTOSA</Text>
        <Text fontWeight={'bold'} fontSize="md">These Thrilling Experience In Resorts World Sentosa Will Have You Booking A Trip To Singapor</Text>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} src='https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1653562686_275721311_336154091889496_2451172917242741439_n.jpg' alt='img2' />
        <Text  color={'tomato'} fontSize="xs" fontWeight={"bold"}>SINGAPORE TOURISM BOARD</Text>
        <Text fontWeight={'bold'} fontSize="md">Visit These 7 Chic Bars In Singapore If You're In The Mood To Live Up The Night!</Text>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} flexDir="column">
        <Image borderRadius={"7px"} src='https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1670586190_image_20221209_165038_253_1.jpg' alt='img2' />
        <Text  color={'tomato'} fontSize="xs" fontWeight={"bold"}>RESORTS WORLD SENTOSA</Text>
        <Text fontWeight={'bold'} fontSize="md">A Curated Guide To The Incredible Attractions Of Resorts World Sentosa, Singapore</Text>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} src='https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1671021501_activity_scuba_diving_in_oman_1.jpg' alt='img2' />
        <Text  color={'tomato'} fontSize="xs" fontWeight={"bold"}>OMAN TOURISM</Text>
        <Text fontWeight={'bold'} fontSize="md">Just 3 Hour Away, Oman Is The Trending International Destination Every Indian Must Visit!</Text>
      </Flex>
    </Flex>
   

    <Flex width={'94%'} alignItems={'center'} flexDir={"column"} p={10}>
    <Image width={"100%"} height={'20rem'} borderRadius="7px" src='https://cdn1.tripoto.com/media/filter/tst/img/2224454/Image/1670822273_mobile.jpg' alt='img1' />
    </Flex>

    <Flex alignItems={'flex-start'} width={"84%"} margin={1}>
    <Text fontSize={useBreakpointValue({ base: '2xl', md: '3xl' ,sm:"xl"})} fontWeight={'bold'}>
    Find Best Places to Visit in India in December & January
    </Text>
    </Flex>

    <Flex width={"84%"} display={{lg:"flex", md: 'box',sm:'box' }} flexDir='row' gap='8'>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1666949651_1636600759_110.png' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>10 Best Places To Experience The Chills This Winter</Text>
        <Text fontSize="sm">By  <Link color={'teal'}> Kadambari Bhatte (curlytravelmess)</Link></Text>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1666949736_1635179153_pahalgam_gulmarg.jpeg' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>15 Winter Destinations, That Are Not Shimla Or Manali</Text>
        <Text  fontSize="sm">By  <Link color={'teal'}> Karishma Shaikh</Link></Text>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} src='https://static2.tripoto.com/media/filter/tst/img/1/SpotDocument/1478950878_1453102404_panamik_hot_geyser_springs_in_nubra_valley_ladakh.jpg' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>Trips To Take With Your Bae This Winter In India</Text>
        <Text  fontSize="sm">By  <Link color={'teal'}> Mohan Nanihal</Link></Text>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} flexDir="column">
        <Image borderRadius={"7px"}  src='https://static2.tripoto.com/media/filter/tst/img/192200/TripDocument/1571216585_adrithcollage.jpg' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>12 Hot Springs In India That Will Warm You Up This Winter</Text>
        <Text fontSize="sm">By  <Link color={'teal'}> Disha Kaptopi</Link></Text>
      </Flex>
    </Flex>
    
    
    <Flex width={"84%"} display={{lg:"flex", md: 'box',sm:'box' }} margin={4} flexDir='row' gap='8'>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} width={"250px"} src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1666950604_1666207073_hornbill_festival_pix_by_vikramjit_kakati.jpg' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>Nagaland's Hornbill Festival Is Happening This December</Text>
        <Text fontSize="sm">By  <Link color={'teal'}> Kadambari Bhatte (curlytravelmess)</Link></Text>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} height="164px" src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669621772_1479799117_19594481674_73bfdd5e4a_z.jpg' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>26 Best Places In India To Visit This December</Text>
        <Text  fontSize="sm">By  <Link color={'teal'}> Karishma Shaikh</Link></Text>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} height="164px" src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669615182_1669300591_snip20220609_1_1024x573.png' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>10 Events You Can't Miss This Winter In Delhi</Text>
        <Text  fontSize="sm">By  <Link color={'teal'}> Mohan Nanihal</Link></Text>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} width={"250px"} src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669632229_1635615472_picsart_10_30_11_07_24.jpg' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>10 Recommended Destinations For Solo Travelers</Text>
        <Text fontSize="sm">By  <Link color={'teal'}> Disha Kaptopi</Link></Text>
      </Flex>
    </Flex>

    <Flex width={'94%'} alignItems={'center'} flexDir={"column"} p={10}>
    <Image width={'100%'} height={'20rem'} borderRadius="7px" src='https://cdn1.tripoto.com/media/filter/nxxl/img/2215463/Image/1669366871_kerala.jpg' alt='img1' />
    </Flex>
    

    <Flex width={"84%"} display={{lg:"flex", md: 'box',sm:'box' }} margin={4} flexDir='row' gap='8'>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} h={"10rem"} src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669368402_1656747258_dream_holidays_c8mz8fp_zvc_unsplash.jpg' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>Nagaland's Hornbill Festival Is Happening This December</Text>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} flexDir="column">
        <Image borderRadius={"7px"} h={"10rem"} src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669368370_1650865492_nature_photographer_29ezcwtmtnm_unsplash.jpg' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>26 Best Places In India To Visit This December</Text>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} h={"10rem"} src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669368422_1650645286.jpeg' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>10 Events You Can't Miss This Winter In Delhi</Text>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} h={"10rem"} src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669368429_1669359075_screenshot_2022_11_25_at_12_18_09_pm.png' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>10 Recommended Destinations For Solo Travelers</Text>
      </Flex>
    </Flex>
    
    <Flex width={"84%"} display={{lg:"flex", md: 'box',sm:'box' }} margin={4} flexDir='row' gap='8'>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} h={'10rem'} src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669368461_1651231875_screenshot_2022_04_29_at_5_01_06_pm.png' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>Around Kerala In 15 Dishes! Must Eat Food When In Kerala.</Text>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} h={'10rem'} src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669368469_1562007949_suna_hai_uske_labon_se_gulab_jalte_hai5_62.png' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>7 Temple Festivals In Kerala That You Must Attend</Text>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} h={'10rem'} src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669368483_1510408558_cruise1.jpg' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>This Luxury Cruise In Kerala For Your Next Family Vacay</Text>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} h={'10rem'} src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669369517_1592307582_1592307581400.jpg' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>Scenes Of A Kathakali Performance I Witnessed</Text>
      </Flex>
    </Flex>
    
    <Flex width={"84%"} display={{lg:"flex", md: 'box',sm:'box' }} margin={4} flexDir='row' gap='8'>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} h={'10rem'} src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669369530_1487525352_backwater_2032737_1280.jpg' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>Planning A 6-Day Budget Trip To Kerala </Text>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} h={'10rem'} src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669369542_1639536937_adobestock_198014696_scaled.jpeg' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>Spend A Night At India's Greenest Tree Hotel In Kerala</Text>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} h={'10rem'} src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669369572_1656771413_arnold_antoo_yp6fohzfdvs_unsplash.jpg' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>25 Places In Wayanad For Your Hilly Vacation</Text>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} h={'10rem'} src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669369584_1668695824_abhishek_prasad_n3vzlebhovk_unsplash.jpg' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>These Luxury Properties In Kerala For Your Honeymoon</Text>
      </Flex>
    </Flex>

    <Flex alignItems={'flex-start'} width={"84%"} margin={1}>
    <Text fontSize={useBreakpointValue({ base: '2xl', md: '3xl' ,sm:"xl"})} fontWeight={'bold'}>
    Exclusively Curated: Tripoto's Mindful Retreats
    </Text>
    </Flex>
    
    <Flex width={"84%"} display={{lg:"flex", md: 'box',sm:'box' }} margin={4} flexDir='row' gap='8'>
      <Flex width={{lg:'35%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1662966110_image_cover_2.jpg' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>Unwind With A Session & An Open-Air Movie At This Village-Themed Retreal | A Kasauli Ggaon </Text>
        <Flex >
          <Text color={'teal'}><Icon as={BiMap} /> Himachal Pradesh</Text>
          <Spacer />
          <Button colorScheme='teal' size='sm' borderRadius={14}>3D-2N</Button>
        </Flex>
        <Flex >
          <Text fontWeight={'bold'}>₹ 8,500</Text>
          <Spacer />
          <Button colorScheme='teal' variant='outline' size='sm'>Book Now</Button>
        </Flex>
        <Flex gap={2}>
        <Avatar size='xs' name='Oshigaki Kisame' src='https://bit.ly/broken-link' />
          <Text fontSize={'sm'}>Tripoto's Mindful Retreats <Icon as={MdVerified} color='teal' /></Text>
        </Flex>
      </Flex>
      <Flex width={{lg:'35%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1657734830_image_cover_a.jpg' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>Unwind With A Session & An Open-Air Movie At This Village-Themed Retreal | A Kasauli Ggaon</Text>
        <Flex >
          <Text color={'teal'}> <Icon as={BiMap} /> Mussoorie</Text>
          <Spacer />
          <Button colorScheme='teal' size='sm' borderRadius={14}>3D-2N</Button>
        </Flex>
        <Flex >
          <Text fontWeight={'bold'}>₹ 7,500</Text>
          <Spacer />
          <Button colorScheme='teal' variant='outline' size='sm'>Book Now</Button>
        </Flex>
        <Flex gap={2}>
        <Avatar size='xs' name='Oshigaki Kisame' src='https://bit.ly/broken-link' />
          <Text fontSize={'sm'}>Tripoto's Mindful Retreats <Icon as={MdVerified} color='teal' /></Text>
        </Flex>
      </Flex>
      <Flex width={{lg:'35%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} src='https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1654504108_ce_c1.jpg' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>Unwind With A Session & An Open-Air Movie At This Village-Themed Retreal | A Kasauli Ggaon</Text>
        <Flex >
          <Text color={'teal'}><Icon as={BiMap} /> Dharamshala</Text>
          <Spacer />
          <Button colorScheme='teal' borderRadius={14} size='sm'>3D-2N</Button>
        </Flex>
        <Flex >
          <Text fontWeight={'bold'}>₹ 13,750</Text>
          <Spacer />
          <Button colorScheme='teal' variant='outline' size='sm'>Book Now</Button>
        </Flex>
        <Flex gap={2}>
        <Avatar size='xs' name='Oshigaki Kisame' src='https://bit.ly/broken-link' />
          <Text fontSize={'sm'}>Tripoto's Mindful Retreats <Icon as={MdVerified} color='teal' /></Text>
        </Flex>
      </Flex>
    </Flex>


    <Flex alignItems={'flex-start'} width={"84%"} margin={1}>
    <Text fontSize={useBreakpointValue({ base: '2xl', md: '3xl' ,sm:"xl"})} fontWeight={'bold'}>
    Plan You Next International Trip During December & January
    </Text>
    </Flex>

    <Flex width={"84%"} display={{lg:"flex", md: 'box',sm:'box' }} margin={4} flexDir='row' gap='8'>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} h={'10rem'} src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1666949651_1636600759_110.png' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>10 Best Places To Experience The Chills This Winter</Text>
        <Text fontSize="sm">By  <Link color={'teal'}> Kadambari Bhatte (curlytravelmess)</Link></Text>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} h={'10rem'} src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1666949736_1635179153_pahalgam_gulmarg.jpeg' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>15 Winter Destinations, That Are Not Shimla Or Manali</Text>
        <Text  fontSize="sm">By  <Link color={'teal'}> Karishma Shaikh</Link></Text>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} h={'10rem'} src='https://static2.tripoto.com/media/filter/tst/img/1/SpotDocument/1478950878_1453102404_panamik_hot_geyser_springs_in_nubra_valley_ladakh.jpg' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>Trips To Take With Your Bae This Winter In India</Text>
        <Text  fontSize="sm">By  <Link color={'teal'}> Mohan Nanihal</Link></Text>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} h={'10rem'} src='https://static2.tripoto.com/media/filter/tst/img/192200/TripDocument/1571216585_adrithcollage.jpg' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>12 Hot Springs In India That Will Warm You Up This Winter</Text>
        <Text fontSize="sm">By  <Link color={'teal'}> Disha Kaptopi</Link></Text>
      </Flex>
    </Flex>


    <Flex width={"84%"} display={{lg:"flex", md: 'box',sm:'box' }} margin={4} flexDir='row' gap='8'>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} h={'10rem'} src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1666950604_1666207073_hornbill_festival_pix_by_vikramjit_kakati.jpg' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>Nagaland's Hornbill Festival Is Happening This December</Text>
        <Text fontSize="sm">By  <Link color={'teal'}> Kadambari Bhatte (curlytravelmess)</Link></Text>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} h={'10rem'} src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669621772_1479799117_19594481674_73bfdd5e4a_z.jpg' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>26 Best Places In India To Visit This December</Text>
        <Text  fontSize="sm">By  <Link color={'teal'}> Karishma Shaikh</Link></Text>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} h={'10rem'} src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669615182_1669300591_snip20220609_1_1024x573.png' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>10 Events You Can't Miss This Winter In Delhi</Text>
        <Text  fontSize="sm">By  <Link color={'teal'}> Mohan Nanihal</Link></Text>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} h={'10rem'} src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669632229_1635615472_picsart_10_30_11_07_24.jpg' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>10 Recommended Destinations For Solo Travelers</Text>
        <Text fontSize="sm">By  <Link color={'teal'}> Disha Kaptopi</Link></Text>
      </Flex>
    </Flex>


    <Flex width={'94%'} alignItems={'center'} flexDir={"column"} p={10}>
    <Image width={"100%"} height={'20rem'} borderRadius="7px" src='https://cdn1.tripoto.com/media/filter/nxxl/img/2215463/Image/1669615247_maldives.jpg' alt='img1' />
    </Flex>

    <Flex width={"84%"} display={{lg:"flex", md: 'box',sm:'box' }} margin={4} flexDir='row' gap='8'>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} flexDir="column">
        <Image borderRadius={"7px"} width={"250px"} height={'165px'} src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669368461_1651231875_screenshot_2022_04_29_at_5_01_06_pm.png' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>Around Kerala In 15 Dishes! Must Eat Food When In Kerala.</Text>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} height="164px" src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669368469_1562007949_suna_hai_uske_labon_se_gulab_jalte_hai5_62.png' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>7 Temple Festivals In Kerala That You Must Attend</Text>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} height="164px" src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669368483_1510408558_cruise1.jpg' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>This Luxury Cruise In Kerala For Your Next Family Vacay</Text>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} width={"250px"} height="164px" src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669369517_1592307582_1592307581400.jpg' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>Scenes Of A Kathakali Performance I Witnessed</Text>
      </Flex>
    </Flex>
    
    <Flex width={"84%"} display={{lg:"flex", md: 'box',sm:'box' }} margin={4} flexDir='row' gap='8'>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} width={"250px"} height={'165px'} src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669369530_1487525352_backwater_2032737_1280.jpg' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>Planning A 6-Day Budget Trip To Kerala </Text>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} height="164px" src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669369542_1639536937_adobestock_198014696_scaled.jpeg' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>Spend A Night At India's Greenest Tree Hotel In Kerala</Text>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} height="164px" src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669369572_1656771413_arnold_antoo_yp6fohzfdvs_unsplash.jpg' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>25 Places In Wayanad For Your Hilly Vacation</Text>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} width={"250px"} src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669369584_1668695824_abhishek_prasad_n3vzlebhovk_unsplash.jpg' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>These Luxury Properties In Kerala For Your Honeymoon</Text>
      </Flex>
    </Flex>

    <Flex alignItems={'flex-start'} width={"84%"} margin={1}>
    <Text fontSize={useBreakpointValue({ base: '2xl', md: '3xl' ,sm:"xl"})} fontWeight={'bold'}>
    Book Budget Tour Packages Curated For You
    </Text>
    </Flex>

    <Flex width={"84%"} display={{lg:"flex", md: 'box',sm:'box' }} margin={4} flexDir='row' gap='8'>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} src='https://cdn1.tripoto.com/media/filter/tst/img/1524784/Image/1565782355_kerala_app.jpg' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>Kerala Package </Text>
        <Flex >
          <Text color={'teal'}><Icon as={BiMap} /> Kerala</Text>
          <Spacer />
          <Button colorScheme='teal' size='sm' borderRadius={14}>4D-3N</Button>
        </Flex>
        <Flex >
          <Text fontWeight={'bold'}>₹ 12,500</Text>
          <Spacer />
          <Button colorScheme='teal' variant='outline' size='sm'>Get Quotes</Button>
        </Flex>
        <Flex gap={2}>
        <Avatar size='xs' name='Oshigaki Kisame' src='https://bit.ly/broken-link' />
          <Text fontSize={'sm'}>Tripoto's Mindful Retreats <Icon as={MdVerified} color='teal' /></Text>
        </Flex>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} src='https://cdn1.tripoto.com/media/filter/tst/img/454712/Image/1578895208_web_maldives.jpg' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>Maldivs Holiday Package</Text>
        <Flex >
          <Text color={'teal'}> <Icon as={BiMap} /> Maldivs </Text>
          <Spacer />
          <Button colorScheme='teal' size='sm' borderRadius={14}>4D-3N</Button>
        </Flex>
        <Flex >
          <Text fontWeight={'bold'}>₹ 70,000</Text>
          <Spacer />
          <Button colorScheme='teal' variant='outline' size='sm'>Get Quotes</Button>
        </Flex>
        <Flex gap={2}>
        <Avatar size='xs' name='Oshigaki Kisame' src='https://bit.ly/broken-link' />
          <Text fontSize={'sm'}>Tripoto's Mindful Retreats <Icon as={MdVerified} color='teal' /></Text>
        </Flex>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} src='https://cdn1.tripoto.com/media/filter/tst/img/1524784/Image/1567083461_dubai_app.jpg' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>Dubai Pacakge </Text>
        <Flex >
          <Text color={'teal'}><Icon as={BiMap} /> Dubai</Text>
          <Spacer />
          <Button colorScheme='teal' borderRadius={14} size='sm'>5D-4N</Button>
        </Flex>
        <Flex >
          <Text fontWeight={'bold'}>₹ 28,000</Text>
          <Spacer />
          <Button colorScheme='teal' variant='outline' size='sm'>Get Quotes</Button>
        </Flex>
        <Flex gap={2}>
        <Avatar size='xs' name='Oshigaki Kisame' src='https://bit.ly/broken-link' />
          <Text fontSize={'sm'}>Tripoto's Mindful Retreats <Icon as={MdVerified} color='teal' /></Text>
        </Flex>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} src='https://cdn1.tripoto.com/media/filter/tst/img/1524784/Image/1567494998_andaman_app.jpg' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>Andaman Package</Text>
        <Flex >
          <Text color={'teal'}><Icon as={BiMap} /> Andaman</Text>
          <Spacer />
          <Button colorScheme='teal' borderRadius={14} size='sm'>5D-4N</Button>
        </Flex>
        <Flex >
          <Text fontWeight={'bold'}>₹ 18,000</Text>
          <Spacer />
          <Button colorScheme='teal' variant='outline' size='sm'>Get Quotes</Button>
        </Flex>
        <Flex gap={2}>
        <Avatar size='xs' name='Oshigaki Kisame' src='https://bit.ly/broken-link' />
          <Text fontSize={'sm'}>Tripoto's Mindful Retreats <Icon as={MdVerified} color='teal' /></Text>
        </Flex>
      </Flex>
    </Flex>

    <Flex alignItems={'flex-start'} width={"84%"} margin={1}>
    <Text fontSize={useBreakpointValue({ base: '2xl', md: '3xl' ,sm:"xl"})} fontWeight={'bold'}>
    In the Spotlight: Tripoto Creators of the Month - November 2022
    </Text>
    </Flex>
    <Flex alignItems={'flex-start'} width={"84%"} margin={1}>
    <Text>
    Tripoto Family is a community of travel content creators who create stunning photo blogs, engaging reels and videos as well as informative articles. Here are the most promising creators of the month who shared their favorite Winter Experiences with us. Kudos to Tripoto's best creators for Nov 2022!
    </Text>
    </Flex>
    <Flex width={"84%"} display={{lg:"flex", md: 'box',sm:'box' }} margin={4} flexDir='row' gap='8'>
      <Flex width={{lg:'20%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1670220316_1st_cards_1.jpg' alt='img2' />
      </Flex>
      <Flex width={{lg:'20%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1670220256_19.jpg' alt='img2' />
      </Flex>
      <Flex width={{lg:'20%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1670220280_18.jpg' alt='img2' />
      </Flex>
      <Flex width={{lg:'20%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1670220306_17.jpg' alt='img2' />
      </Flex>
      <Flex width={{lg:'20%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"}  src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1667311974_2nd_card.jpg' alt='img2' />
      </Flex>
    </Flex>
    
    <Flex alignItems={'flex-start'} width={"84%"} margin={1}>
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
   
    <Flex alignItems={'flex-start'} width={"84%"} margin={1}>
    <Text fontSize={useBreakpointValue({ base: '2xl', md: '3xl' ,sm:"xl"})} fontWeight={'bold'}>
    Watch Tripoto's Top Travel Vlogs of the Week
    </Text>
    </Flex>
    <Flex width={"84%"} display={{lg:"flex", md: 'box',sm:'box' }} margin={4} flexDir='row' gap='8'>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} h={'10rem'} src='https://image.mux.com/65Mxwlku9ue7VTvDW8F72z1U5VIOiEaz/thumbnail.jpg?width=600&height=600&time=2.0' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>10 Best Places To Experience The Chills This Winter</Text>
        <Text fontSize="sm">By  <Link color={'teal'}> Namita Mittal</Link></Text>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} h={'10rem'} src='https://cdn1.tripoto.com/media/filter/tst/gen/1789711/Image/1634027797_thumbnail.jpg' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>15 Winter Destinations, That Are Not Shimla Or Manali</Text>
        <Text  fontSize="sm">By  <Link color={'teal'}> Namita Mittal</Link></Text>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} h={'10rem'} src='https://image.mux.com/iFVXAVPcgtz02Zcmt2ExiBVFZbYw7iMhN/thumbnail.jpg?width=600&height=600&time=3.01' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>Trips To Take With Your Bae This Winter In India</Text>
        <Text  fontSize="sm">By  <Link color={'teal'}> Namita Mittal</Link></Text>
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} h={'10rem'} src='https://image.mux.com/VZNhkabs2mLwRfjO6j600Q7OmfLxm5VmV/thumbnail.jpg?width=600&height=600&time=2.0' alt='img2' />
        <Text fontSize="md" fontWeight={"bold"}>12 Hot Springs In India That Will Warm You Up This Winter</Text>
        <Text fontSize="sm">By  <Link color={'teal'}> Namita Mittal</Link></Text>
      </Flex>
    </Flex>
    </Flex>

    </Flex>
   <Divider/>
    <br/>
    <br/>
    
    {/* </Container> */}
    </div>
    )
}

export default Homepage