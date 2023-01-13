import { Box, Heading, Text, ScaleFade } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

export default function Success() {
  return (
    <ScaleFade initialScale={0.7} in={true}>
      <Box textAlign="center" py={2} px={3}>
        <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
        <Heading as="h2" size="md" mt={2} mb={1}>
          Upload completed
        </Heading>
        <Text color={'gray.500'}>The upload has concluded</Text>
      </Box>
    </ScaleFade>
  )
}
