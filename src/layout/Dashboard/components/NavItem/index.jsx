import { Flex, Icon, Link } from '@chakra-ui/react'

import { CustomLink } from '@lib/components'

const NavItem = ({ icon, link, children, ...rest }) => {
  return (
    <CustomLink
      href={link}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white'
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white'
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </CustomLink>
  )
}

export default NavItem
