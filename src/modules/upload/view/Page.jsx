import { Card, useColorModeValue, Text } from '@chakra-ui/react'
import UploadZone from '@upload/components/UploadZone'
import FileTable from '@upload/components/Table'
import UploadProgressModal from '@upload/components/UploadProgressModal'

export default function UploadPage() {
  return (
    <Card
      minH="100%"
      p={3}
      bg={useColorModeValue('whiteAlpha.800', 'blackAlpha.500')}
    >
      <>
        <UploadZone />

        <Text fontSize="lg" pb={2} pt={1}>
          Files Uploaded
        </Text>
        <FileTable />

        <UploadProgressModal />
      </>
    </Card>
  )
}
