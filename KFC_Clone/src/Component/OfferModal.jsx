import React from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  Flex
} from "@chakra-ui/react";
import OrderModal from './OrederModal';

const OfferModal = ({ isOpen, onClose, offer }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        h={{ base: 'auto', md: '500px' }}
        maxW={{ base: '90%', sm: '70%', md: '50%', lg: '40%' }}
      >
        <ModalHeader borderBottom='1px solid #202124'>
          <Flex justify='center' align='center'>
            <Text fontFamily='Arial' fontSize={{ base: 'lg', md: '2xl' }} fontWeight='bold'>
              Exclusive Offers For You
            </Text>
          </Flex>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text
            ml={{ base: '10px', md: '20px' }}
            mr={{ base: '10px', md: '20px' }}
            fontFamily='Arial'
            fontSize={{ base: 'md', md: '2xl' }}
            fontWeight='bold'
            textAlign='center'
          >
            {offer?.title}
          </Text>
          <Text
            textAlign='center'
            mt={4}
            ml={{ base: '10px', md: '20px' }}
            mr={{ base: '10px', md: '20px' }}
          >
            <strong>Validity:</strong> {offer?.validity}
          </Text>
          <Text
            textAlign='center'
            mt={4}
            ml={{ base: '10px', md: '20px' }}
            mr={{ base: '10px', md: '20px' }}
          >
            {offer?.title}
          </Text>
        </ModalBody>
        <Flex justify='center' align='center'>
          <ModalFooter mb='20px'>
            <Button onClick={OrderModal}
              bg='white'
              border='1px solid black'
              h='40px'
              borderRadius='20px'
              _hover={{
                bg: 'black',
                color: 'white',
                borderColor: 'black',
              }}
              fontSize={{ base: 'sm', md: 'md' }}
            >
              Apply Offer
            </Button>
          </ModalFooter>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default OfferModal;
