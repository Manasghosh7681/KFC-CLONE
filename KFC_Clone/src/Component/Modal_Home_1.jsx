import { Button, Divider, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react'
import Modal_Home_2 from './Modal_Home_2';

const Modal_Home_1 = (e) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
        <a onClick={onOpen} style={{textDecoration:"underline",fontFamily: "Arial",
                fontWeight: "600"}}>View Details</a>
        <Modal isOpen={isOpen} onClose={onClose} size={"xl"} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader><Text style={{fontFamily: "Impact, fantasy",}}>EXCLUSIVE OFFERS FOR YOU</Text></ModalHeader>
          <Divider/>
          <ModalCloseButton />
          <ModalBody style={{testAlign:"center"}}>
            <Text fontFamily={"Impact, fantasy"} textAlign={"center"}>{e.title}</Text>
            <Text textAlign={"center"}>Valid till 31/12/24</Text>
            <Text textAlign={"center"}>{e.description}</Text>
            
          </ModalBody>

          <ModalFooter display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Modal_Home_2/>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Modal_Home_1