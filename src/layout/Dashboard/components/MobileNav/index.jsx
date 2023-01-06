import {
  IconButton,
  Avatar,
  Box,
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  Text,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList
} from '@chakra-ui/react'
import { FiBell, FiChevronDown } from 'react-icons/fi'
import { AiOutlineMenuUnfold } from 'react-icons/ai'

import ThemeToggleButton from '../ThemeToggleButton'

import { CustomLink } from '@lib/components'
import MAIN_ROUTES from '@constants/routes'

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        size="lg"
        p={2}
        aria-label="open menu"
        icon={<AiOutlineMenuUnfold />}
      />

      <CustomLink href={MAIN_ROUTES.MAIN}>
        <Text
          display={{ base: 'flex', md: 'none' }}
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Dev_Env
        </Text>
      </CustomLink>

      <HStack spacing={{ base: '1', md: '4' }}>
        <ThemeToggleButton />
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />

        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}
            >
              <HStack>
                <Avatar
                  size={'sm'}
                  src={'https://randomuser.me/api/portraits/men/28.jpg'}
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Felipey Dev</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}
              zIndex={10}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}

export default MobileNav
