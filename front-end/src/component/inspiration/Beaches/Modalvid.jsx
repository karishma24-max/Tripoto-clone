import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import {Modal,ModalOverlay,ModalContent } from '@chakra-ui/react'



const Youtubevid=()=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)
    return (
      <>
        
        <img onClick={onOpen}
              src="https://img.youtube.com/vi/jU7ZyViNu2U/sddefault.jpg"
              alt="kriss"
            />
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/jU7ZyViNu2U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default Youtubevid