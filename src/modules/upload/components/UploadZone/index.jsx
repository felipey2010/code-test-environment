import { Box, ScaleFade } from '@chakra-ui/react'
// import { TbUpload } from 'react-icons/tb'
// import { AiOutlineClose } from 'react-icons/ai'
import Dropzone from './components/Dropzone'
import { usePageManager } from '@upload/contexts/PageManager/Provider'

export default function UploadZone() {
  const { prepareUpload, uploading } = usePageManager()

  return (
    <Box pb={4}>
      {/* {droppedFiles.length > 0 ? (
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
      ) : ( */}
      <ScaleFade initialScale={0.8} in={!uploading}>
        <Dropzone
          acceptFiles={['PDF', 'DOC', 'JPG', 'PNG']}
          onUpload={prepareUpload}
          maxSize={3145728}
        />
      </ScaleFade>
      {/* )} */}
    </Box>
  )
}
