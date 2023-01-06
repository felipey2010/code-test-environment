import { memo } from 'react'
import { Center, Flex, Text, Spinner } from '@chakra-ui/react'

function LoaderDefault({
  direction = 'column',
  text,
  size,
  isLoading,
  thickness = '2px',
  speed = '0.65s',
  emptyColor,
  color = 'primary',
  children,
  ...rest
}) {
  if (isLoading || !children) {
    return (
      <Center {...rest}>
        <Flex color={color} direction={direction} align="center" gap={4}>
          <Spinner
            thickness={thickness}
            speed={speed}
            emptyColor={emptyColor}
            size={size}
          />
          <Text fontSize={size}>{text}</Text>
        </Flex>
      </Center>
    )
  }

  return children
}

export default memo(LoaderDefault)
