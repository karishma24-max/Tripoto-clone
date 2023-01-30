import {
  Box,
  Flex,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Button,
  Popover,
  Avatar,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShowContext } from "../Context/ShowContext"
import styles from "./Navbar.module.css";
 import { AuthContext } from "../PrivateRoute/AuthContext";
 
export function Navbar() {
  // const [color, setColor] = useState(false);
  const {isAuthc,setIsAuthc}=useContext(AuthContext)
   
  const { show, setShow } = useContext(ShowContext);
  const [user,setUser]=useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    const u = JSON.parse(localStorage.getItem('userData'));
    setUser(u)
  
  },[])
  console.log(user)

  const changeColor = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  }, []);
  return (
    <Box
      id={styles.navbar}
      style={
        show
          ? { backgroundColor: "#2f9bdb", transition: "all 0.5s ease-out" }
          : { backgroundColor: "transparent", transition: "all 0.5s ease-out" }
      }
    >
      <Box>
        <NavLink to="/">
          <Image src="https://cdn1.tripoto.com/assets/2.9/img/logo/tripoto.svg" />
        </NavLink>
      </Box>
      <Box>
        {show && (
          <Input marginLeft={6}
            className={styles.navSearch}
            transition="all 0.5s ease-out"
            bg="white"
            placeholder="Search for itineraries, destinations, hotels or activities"
            width="500px"
            height="40px"
          />
        )} 
      </Box>
      <Box>
        <Menu>
        {/* <Popover trigger={'hover'} placement={'bottom-start'}> */}

          <MenuButton as={Box}>Inspiration </MenuButton>
          <MenuList color="black" fontSize="14px">
            <MenuItem >
              <NavLink to="/singapore">Visit Singapore</NavLink>
            </MenuItem>
            <MenuItem>
            <NavLink to="/beaches">Beaches</NavLink>
            </MenuItem>
            <MenuItem><NavLink to="/mountain">Mountain</NavLink></MenuItem>
            <MenuItem>Heritage</MenuItem>
            <MenuItem>Weekend Guide</MenuItem>
            <MenuItem>Upcoming Festivals</MenuItem>
            <MenuItem>Honeymoon Packages</MenuItem>
            <MenuItem>Wildlife Tourism</MenuItem>
            <MenuItem>Roadlife Trips</MenuItem>
            <MenuItem>Getaways Guide</MenuItem>
            <MenuItem>Luxury Travel</MenuItem>
            <MenuItem>Explore More</MenuItem>
          </MenuList>
        </Menu>
       {isAuthc.user=="admin"?<NavLink to="/admin">Admin</NavLink>:""} 
        <NavLink to="/packages">Packages</NavLink>
        <Menu>
          <MenuButton as={Box}>Publish Trip </MenuButton>
          <MenuList color="black" fontSize="14px">
            <MenuItem >
              <NavLink to="/tripper">Create New</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="#">Upload Photos/Video</NavLink>
            </MenuItem>
            <MenuItem>Import Blog</MenuItem>
          </MenuList>
        </Menu>
        
        {/* <NavLink>Publish Trip</NavLink> */}
        {/* <NavLink to="/admin">Admin</NavLink> */}
        {/* <NavLink to="/signup">Sign in</NavLink> */}
        {isAuthc.isAuth ?          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://storage.needpix.com/rsynced_images/head-659652_1280.png'
                  }
                />
              </MenuButton>
              <MenuList color={"black"}>
                <MenuItem onClick={() => navigate('/Booking')} >My Bookings</MenuItem>
                <MenuDivider />
                <MenuItem onClick={()=> window.location.reload()}>LogOut</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
:<NavLink to="/signup">Sign in</NavLink>} 

      </Box>
    </Box>
  );
}