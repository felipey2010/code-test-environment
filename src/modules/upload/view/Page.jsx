import {
  Box,
  Card,
  Flex,
  SimpleGrid,
  Text,
  useColorModeValue,
  ScaleFade,
  Button
} from '@chakra-ui/react'

import Dropzone from '../components/Dropzone'
import FileContainer from '../components/FileContainer'

import { usePageManager } from '../contexts/PageManager/Provider'

import { TbUpload } from 'react-icons/tb'
import { AiOutlineClose } from 'react-icons/ai'

export default function UploadPage() {
  const { startUpload, prepareUpload, droppedFiles, cancelUpload, uploading } =
    usePageManager()
  return (
    <Card
      minH="100%"
      p={2}
      bg={useColorModeValue('whiteAlpha.800', 'blackAlpha.500')}
    >
      <Box pb={4}>
        {droppedFiles.length > 0 ? (
          <ScaleFade initialScale={0.8} in={droppedFiles.length > 0}>
            <Flex
              alignItems="center"
              justifyContent="center"
              p={4}
              borderColor="primary"
              outlineColor="primary"
              border="1px"
              borderStyle="dashed"
              borderRadius="md"
              direction={{ base: 'column', md: 'row' }}
            >
              <Button
                variant="outline"
                m={2}
                size="lg"
                color="primary"
                leftIcon={<AiOutlineClose />}
                onClick={() => cancelUpload()}
              >
                Cancel
              </Button>

              <Button
                variant="solid"
                bg="green.800"
                m={2}
                size="lg"
                color="white"
                leftIcon={<TbUpload />}
                onClick={() => startUpload()}
              >
                Upload
              </Button>
            </Flex>
          </ScaleFade>
        ) : (
          <ScaleFade initialScale={0.8} in={droppedFiles.length == 0}>
            <Dropzone
              acceptFiles={['PDF', 'DOC', 'JPG', 'PNG']}
              onUpload={prepareUpload}
              maxSize={3145728}
            />
          </ScaleFade>
        )}
      </Box>
      <Flex direction="column">
        {droppedFiles.length > 0 ? (
          <>
            <Text fontSize="lg" fontWeight={600}>
              Stacked files to upload
            </Text>
            <SimpleGrid spacing={6} minChildWidth="320px" py={2}>
              {droppedFiles.map((file, index) => (
                <FileContainer key={index} file={file} />
              ))}
            </SimpleGrid>
          </>
        ) : null}
      </Flex>
    </Card>
  )
}
