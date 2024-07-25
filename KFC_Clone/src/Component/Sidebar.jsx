'use client'

import React, { ReactNode } from 'react'
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react'
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from 'react-icons/fi'
import './sidebarstyle.css'


// const LinkItems = [
//   { name: 'INTERNATIONAL BURGER FEST' },
//   { name: 'MATCH DAY COMBOS' },
//   { name: 'VALUE LUNCH SPECIALS' },
//   { name: 'BOX MEALS'},
//   { name: 'BURGERS '},
//   { name: 'CHICKEN BUCKETS'},
//   { name: 'RICE BOWLZ'},
//   { name: 'VALUE SNACKERS'},
//   { name: 'VALUE SNACKERS'},
//   { name: 'CHICKEN ROLLS'},
//   { name: 'SNACKS'},
//   { name: 'BEVERAGES'},
// ]

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')} style={{marginLeft:"10%"}}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* Content */}
      </Box>
    </Box>
  )
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box minH="150vh"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="sticky"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="3xl" fontFamily="Impact, fantasy" fontWeight="bold">
          KFC MENU
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {/* {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))} */}
      <Text style={{fontWeight:"500",fontFamily:"Arial",fontSize:"1.2rem", margin:"3rem 0"} } ><a href="#one">INTERNATIONAL BURGER FEST</a></Text>
      <Text style={{fontWeight:"500",fontFamily:"Arial",fontSize:"1.2rem", margin:"3rem 0"} }><a href="#two">MATCH DAY COMBOS</a></Text>
      <Text style={{fontWeight:"500",fontFamily:"Arial",fontSize:"1.2rem", margin:"3rem 0"} }><a href="#three">VALUE LUNCH SPECIALS</a></Text>
      <Text style={{fontWeight:"500",fontFamily:"Arial",fontSize:"1.2rem", margin:"3rem 0"} }><a href="#four">BOX MEALS</a></Text>
      <Text style={{fontWeight:"500",fontFamily:"Arial",fontSize:"1.2rem", margin:"3rem 0"} }><a href="#five">BURGERS</a></Text>
      <Text style={{fontWeight:"500",fontFamily:"Arial",fontSize:"1.2rem", margin:"3rem 0"} }><a href="#six">CHICKEN BUCKETS</a></Text>
      <Text style={{fontWeight:"500",fontFamily:"Arial",fontSize:"1.2rem", margin:"3rem 0"} }><a href="#seven">RICE BOWLZ</a></Text>
      <Text style={{fontWeight:"500",fontFamily:"Arial",fontSize:"1.2rem", margin:"3rem 0"} }><a href="#eight">VALUE SNACKERST</a></Text>
      <Text style={{fontWeight:"500",fontFamily:"Arial",fontSize:"1.2rem", margin:"3rem 0"} }><a href="#nine">CHICKEN ROLLS</a></Text>
      <Text style={{fontWeight:"500",fontFamily:"Arial",fontSize:"1.2rem", margin:"3rem 0"} }><a href="#ten">SNACKS</a></Text>
      <Text style={{fontWeight:"500",fontFamily:"Arial",fontSize:"1.2rem", margin:"3rem 0"} }><a href="#eleven">BEVERAGES</a></Text>
    </Box>
  )
}

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  )
}

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
    </Flex>
  )
}