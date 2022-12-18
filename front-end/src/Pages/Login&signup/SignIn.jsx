

import {
  Alert,
  AlertIcon,
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
     
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { Link } from 'react-router-dom';
  import Fcgoogle from "./Fcgoogle"
  
  export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const [response,setResponse] = useState("");

    let obj={
      firstName: "",
      lastName:"",
      email:"",
      password:""
    }
    const [data,setData] = useState(obj);
  
    console.log(data)
    const OnChange=(e)=>{
    const {value,name}=e.target;
   setData({...data,[name]:value})
    }


    const formSubmit = async (e)=>{
   e.preventDefault();
    
    fetch("https://backend-ergaurav13.onrender.com/users/signup",{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(data)

   }).then((res)=>{
    return res.json()
   }).then((res)=>{
    setResponse(res)
    console.log(res)
   })

   setTimeout(()=>{
    setResponse("")
   },3000)

    }




    return (


      
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>

        {response.message=="Sucessfully created" ? (
            <Alert bg="green" status="success">
              <AlertIcon />
              Sucessfully Registered Happy Journey
            </Alert>
          ) : response.message =="userRegistered already"? (
            <Alert bg="red" status="warning">
              <AlertIcon />
              userRegistered already
            </Alert>
          ) :response.message =="Please enter full Details"? (
            <Alert bg="yellow" status="warning">
              <AlertIcon />
              Please enter full Details
            </Alert>
          ): null}

          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" name='firstName' placeholder={"NAME"}  onChange={(e)=>OnChange(e)}/>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" name='lastName' placeholder={"LAST NAME"}  onChange={(e)=>OnChange(e)} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email"  name='email' placeholder={"Email"}  onChange={(e)=>OnChange(e)}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input name='password' type={showPassword ? 'text' : 'password'} placeholder={"Password"}  onChange={(e)=>OnChange(e)} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  type='submit'
                  onClick={(e)=>formSubmit(e)}
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                    
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link to="/login" color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }