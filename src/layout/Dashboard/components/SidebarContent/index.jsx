import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text
} from '@chakra-ui/react'

import { FiHome, FiUpload, FiCompass, FiStar, FiSettings } from 'react-icons/fi'

import NavItem from '../NavItem'

import { CustomLink } from '@lib/components'

import MAIN_ROUTES from '@constants/routes'

const LinkItems = [
  { name: 'Home', link: MAIN_ROUTES.DASHBOARD, icon: FiHome },
  { name: 'Upload', link: MAIN_ROUTES.UPLOAD, icon: FiUpload },
  // { name: 'Explore', link: '#', icon: FiCompass },
  // { name: 'Favourites', link: '#', icon: FiStar },
  { name: 'Settings', link: MAIN_ROUTES.SETTINGS, icon: FiSettings }
]

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        // mx="8"
        justifyContent="center"
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <CustomLink href="/">
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            Dev_Env
          </Text>
        </CustomLink>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((item) => (
        <NavItem key={item.name} icon={item.icon} link={item.link}>
          {item.name}
        </NavItem>
      ))}
    </Box>
  )
}

export default SidebarContent
