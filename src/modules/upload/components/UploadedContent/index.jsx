import { Flex, Text, SimpleGrid } from '@chakra-ui/react'
import FileContainer from './components/FileContainer'
import { usePageManager } from '@upload/contexts/PageManager/Provider'

export default function UploadedContent() {
  const { droppedFiles } = usePageManager()

  return (
    <Flex direction="column">
      {droppedFiles.length > 0 ? (
        <>
          <Text fontSize="lg">Stacked files to upload</Text>
          <SimpleGrid spacing={6} minChildWidth="320px" py={2}>
            {droppedFiles.map((file, index) => (
              <FileContainer key={index} file={file} />
            ))}
          </SimpleGrid>
        </>
      ) : null}
    </Flex>
  )
}
