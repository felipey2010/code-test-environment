import { memo } from 'react'
import { Link } from '@chakra-ui/react'

import NextLink from 'next/link'

function CustomNextLink({ href, children, ...rest }) {
  return (
    // <NextLink href={href} passHref {...rest}>
    <Link as={NextLink} href={href} {...rest}>
      {children}
    </Link>
    // </NextLink>
  )
}

export default memo(CustomNextLink)
