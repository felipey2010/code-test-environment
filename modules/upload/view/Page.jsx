import { Box, Card, useColorModeValue } from '@chakra-ui/react'

import Dropzone from '../components/Dropzone'

import { usePageManager } from '../contexts/PageManager/Provider'

export default function UploadPage() {
  const { startUpload, uploading } = usePageManager()
  return (
    <Card
      minH="100%"
      p={2}
      bg={useColorModeValue('whiteAlpha.800', 'blackAlpha.500')}
    >
      <Box pb={4}>
        <Dropzone
          acceptFiles={['PDF', 'DOC', 'JPG', 'PNG']}
          onUpload={startUpload}
          maxSize={3000000}
        />
      </Box>
    </Card>
  )
}
