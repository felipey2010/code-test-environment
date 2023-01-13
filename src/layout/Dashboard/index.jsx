import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure
} from '@chakra-ui/react'

import SidebarContent from './components/SidebarContent'
import MobileNav from './components/MobileNav'

export default function SidebarWithHeader({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box
      h="100vh"
      overflow="hidden"
      bg={useColorModeValue('gray.100', 'gray.900')}
    >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box
        ml={{ base: 0, md: 60 }}
        p={4}
        h="calc((100vh) - 96px)"
        overflowY="auto"
      >
        {children}
      </Box>
    </Box>
  )
}
