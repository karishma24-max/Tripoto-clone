import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    IconButton,
    Image,
    useDisclosure,
  } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { NavLink } from "react-router-dom";
import { ShowContext } from "../Context/ShowContext";
import { useContext, useState } from "react";
  
  
  function HamburgerMenu() {
    const [placement, setPlacement] = useState("top");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { show, setShow } = useContext(ShowContext);
  
  
  
    return (
      <>
        <Box width={'100%'} display={"flex"} justifyContent="space-between" padding={"10px"} backgroundColor="#2f9bdb">
          <NavLink to="/">
            <Image src="https://cdn1.tripoto.com/assets/2.9/img/logo/tripoto.svg" />
          </NavLink>
          {/* <Button
            onClick={onOpen}
            zIndex={100}
            bgColor="transparent"
          >
            <GiHamburgerMenu size={"sm"} color="white" />
          </Button> */}
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Box>
  
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent bgColor="#2f9bdb">
            <DrawerHeader borderBottomWidth="1px">
              <NavLink to="/">
                <Image src="https://cdn1.tripoto.com/assets/2.9/img/logo/tripoto.svg" />
              </NavLink>
            </DrawerHeader>
            <DrawerBody
              display="flex"
              flexDirection="column"
              gap="20px"
              color={"white"}
            >
             <NavLink to="/signup">Sign in</NavLink>
              <NavLink to="/singapore" isOpen={onClose}>
                Visit Singapore
              </NavLink>
             
              <NavLink to="/beaches">Beaches</NavLink>
              
              <NavLink to="/mountain">Mountain</NavLink>
             
              <NavLink to="/packages">Packages</NavLink>
              <NavLink to="/tripper">Publish trip</NavLink>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  }
  
  export default HamburgerMenu;