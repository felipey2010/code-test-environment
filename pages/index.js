import { Button, Flex, Stack } from '@chakra-ui/react'
import { SEO, CustomLink } from '@lib/components'

import MAIN_ROUTES from '@constants/routes'

export default function Home() {
  return (
    <>
      <SEO title="Home" />

      <Flex h="100vh" alignItems="center" justifyContent="center">
        <CustomLink href={MAIN_ROUTES.DASHBOARD}>
          <Button>Dashboard</Button>
        </CustomLink>
      </Flex>
    </>
  )
}
