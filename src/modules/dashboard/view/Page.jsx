import { Box, Card, Text, useColorModeValue } from '@chakra-ui/react'

// import { usePageManager } from '../contexts/PageManager/Provider'

export default function UploadPage() {
  // const { startUpload, uploading } = usePageManager()
  return (
    <Card
      minH="100%"
      p={2}
      bg={useColorModeValue('whiteAlpha.800', 'blackAlpha.500')}
    >
      <Box>
        <Text>Home</Text>
      </Box>
    </Card>
  )
}
