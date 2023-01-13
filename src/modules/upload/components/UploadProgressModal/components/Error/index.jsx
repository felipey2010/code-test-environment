import { Box, Flex, Heading, ScaleFade, Text } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

export default function Error() {
  return (
    <ScaleFade initialScale={0.7} in={true}>
      <Box textAlign="center" py={2} px={3}>
        <Box display="inline-block">
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            bg={'red.500'}
            rounded={'50px'}
            w={'55px'}
            h={'55px'}
            textAlign="center"
          >
            <CloseIcon boxSize={'20px'} color={'white'} />
          </Flex>
        </Box>
        <Heading as="h2" size="md" mt={2} mb={1}>
          Upload failed
        </Heading>
        <Text color={'gray.500'}>
          An error ocurred and the upload could not be concluded.
        </Text>
      </Box>
    </ScaleFade>
  )
}
