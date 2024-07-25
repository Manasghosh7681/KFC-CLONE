import React from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  VStack,
  Flex,
  Text,
} from '@chakra-ui/react';

// eslint-disable-next-line react/prop-types
const OrderModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent 
        h={{ base: '100%', sm: '500px', md: '600px' }} 
        maxW={{ base: '100%', sm: '80%', md: '900px' }} 
      >
        <ModalCloseButton />
        <ModalHeader
          borderBottom='1px solid #202124'
          textAlign='center'
          fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }}  >
          <Text
            fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }} 
            fontWeight='bold'
            fontFamily='Arial'
          >
            Start Your Order
          </Text>
        </ModalHeader>
        <ModalBody
       
          backgroundColor='#f8f7f5'  
          p={{ base: 4, sm: 6, md: 8 }} 
        > 
        <Flex justify='center' align='center'>
         <Text
            fontSize={{ base: 'lg', sm: '2xl', md: '4xl' }} 
            fontWeight='bold'
            fontFamily='Arial'
          >how would you like to Receive your Order ?</Text>
          </Flex>
          <VStack spacing={16}>
            <Button w="80%" border='1px solid black'  mt='40px'p='20px' borderRadius='20px' backgroundColor='white' size={{ base: 'sm', md: 'md' }}>Delivery</Button>
            <Button w="80%" border='1px solid black' p='20px' borderRadius='20px' backgroundColor='white' size={{ base: 'sm', md: 'md' }}>Pick Up</Button>
            <Button w="80%" border='1px solid black' p='20px' borderRadius='20px' backgroundColor='white' size={{ base: 'sm', md: 'md' }}>Dine In</Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default OrderModal;
