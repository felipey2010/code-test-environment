import { memo } from 'react'
import { Flex, Heading, Image, Text } from '@chakra-ui/react'

import Empty from 'assets/images/empty/empty.svg'

function EmptyContainer({
  title,
  description,
  children,

  height = '300px',
  ...rest
}) {
  return (
    <Flex
      p={4}
      gap={4}
      height={height}
      direction="column"
      align="center"
      justify="center"
      {...rest}
    >
      <Image src={Empty.src} boxSize={20} />
      <Flex direction="column" align="center" justify="center" gap={2}>
        <Heading textAlign="center" size="md">
          {title}
        </Heading>

        {description && <Text textAlign="center">{description}</Text>}
        {children}
      </Flex>
    </Flex>
  )
}

export default memo(EmptyContainer)
