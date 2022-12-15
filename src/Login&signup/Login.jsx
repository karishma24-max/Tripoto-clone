import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
    BeatLoader 
  } from '@chakra-ui/react';
import { useState } from 'react';
//  import jwt from "jsonwebtoken"
const auth={
    isAuh:false,
    user:" "
}

  export default function Login() {

const [isAuth,setIsAuth] = useState(auth);
const [load,setLoad]=useState(false);
    let obj={
        email:"",
        password:""
      }
      const [data,setData] = useState(obj);
    console.log(isAuth  )
      console.log(data)
      const OnChange=(e)=>{
  
      const {value,name}=e.target;
     setData({...data,[name]:value})
      }
  
      const formSubmit = async (e)=>{
     e.preventDefault();
      setLoad(true)
       fetch("http://localhost:8000/users/login",{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(data)
  
     }).then((res)=>{
      return res.json()
     }).then((res)=>{
      const {message,token,user } = res;
      console.log(res)
      if(message=="login succesfull"){
        setIsAuth({...isAuth,isAuth:true,user})
        alert("SucessFull")
        console.log( isAuth)
      }else if(message=="Invalid-Creadential"){
             alert("Invalid-Creadential")
      } 
     })
  
     setLoad(false)
      }

    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Sign in to your account</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" name='email' onChange={(e)=>OnChange(e)}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name='password'  onChange={(e)=>OnChange(e)}/>
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.500'}>Forgot password?</Link>
              </Stack>

{load?<Button
  isLoading
  colorScheme='blue'
  spinner={<BeatLoader size={8} color='white' />}
>
  Click me
</Button>:  <Button  type='submit' colorScheme={'blue'} variant={'solid'} onClick={(e)=>formSubmit(e)}>
                Sign in
              </Button>}

            
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.pexels.com/photos/4353813/pexels-photo-4353813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
          />
        </Flex>
      </Stack>
    );
  }