import {
  Flex,
  Stack,
  Icon,
  Text,
  useColorModeValue,
  ScaleFade
} from '@chakra-ui/react'

import convertSizeNumberToBytes from '@upload/utils/convertSizeNumberToBytes'

import { AiOutlineClose, AiOutlineFile } from 'react-icons/ai'

export default function FileContainer({ file }) {
  const { name, size } = file
  return (
    <ScaleFade initialScale={0.9} in={true}>
      <Stack
        direction="row"
        w="100%"
        h="100%"
        spacing={6}
        border="2px"
        borderRadius="md"
        p={2}
        justifyContent="space-between"
        borderColor={useColorModeValue('gray.500', 'whiteAlpha.500')}
      >
        <Flex alignItems="center">
          <Flex
            alignItems="center"
            justifyContent="center"
            h="100%"
            w="30px"
            mr={2}
            color={useColorModeValue('gray.500', 'whiteAlpha.500')}
          >
            <Icon as={AiOutlineFile} h="100%" w="100%" />
          </Flex>

          <Flex direction="column" maxW="230px" textOverflow="ellipsis">
            <Text fontWeight={600}>{name}</Text>
            <Text variant="secondary">{convertSizeNumberToBytes(size)}</Text>
          </Flex>
        </Flex>

        <Flex alignItems="center" justifyContent="center">
          <Flex
            alignItems="center"
            justifyContent="center"
            borderRadius="full"
            w="24px"
            h="24px"
            onClick={() => console.log('Close')}
            cursor="pointer"
            _hover={{ bg: useColorModeValue('gray.200', 'whiteAlpha.200') }}
            transition="all 0.3s ease-in-out"
          >
            <Icon as={AiOutlineClose} boxSize={4} />
          </Flex>
        </Flex>
      </Stack>
    </ScaleFade>
  )
}
