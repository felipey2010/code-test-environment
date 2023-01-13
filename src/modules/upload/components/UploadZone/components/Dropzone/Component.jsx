import { useState, memo } from 'react'
import { VStack, Center, Heading, Text } from '@chakra-ui/react'

import convertSizeNumberToBytes from '@upload/utils/convertSizeNumberToBytes'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { useDropzone } from './context/Provider'

function DropzoneComponent() {
  const { acceptFiles, maxSize, dispatchFileUpload, dispatchInputClick } =
    useDropzone()

  const [dragFileEnter, setDragFileEnter] = useState(false)

  const onDrop = async (event) => {
    event.preventDefault()

    setDragFileEnter(false)

    if (event.dataTransfer && event.dataTransfer.files.length != 0) {
      await dispatchFileUpload(event.dataTransfer.files)
    }
  }

  const dropZoneInteractionStyle = {
    outlineColor: 'primary',
    color: 'primary',
    borderColor: 'primary',
    svg: {
      color: 'primary'
    }
  }

  return (
    <Center
      p={4}
      width="100%"
      minHeight="100%"
      draggable="true"
      onDragEnter={() => setDragFileEnter(true)}
      onDragLeave={() => setDragFileEnter(false)}
      onDragOver={(event) => event.preventDefault()}
      onDrop={onDrop}
      onClick={dispatchInputClick}
      onKeyPress={dispatchInputClick}
      transition="all 250ms"
      tabIndex={0}
      cursor="pointer"
      rounded="md"
      border="1px dashed"
      borderColor={dragFileEnter ? 'primary' : 'borderColor'}
      color={dragFileEnter ? 'primary' : 'dark'}
      sx={{ '&:hover, &:focus': dropZoneInteractionStyle }}
    >
      <VStack zIndex={1}>
        <AiOutlineCloudUpload
          transition="all 250ms"
          color="borderColor"
          size={56}
        />
        <VStack>
          <Heading fontWeight="500" as="h1" textAlign="center" size="md">
            {dragFileEnter ? 'Drop file' : 'Click or drop file(s)'}
          </Heading>

          <VStack spacing={0}>
            {maxSize && (
              <Text color="dark" textAlign={'center'}>
                Max file size: {convertSizeNumberToBytes(maxSize)}
              </Text>
            )}
            {acceptFiles && (
              <Text color="dark" textAlign={'center'}>
                Permitted files: {acceptFiles.join(', ')}
              </Text>
            )}
          </VStack>
        </VStack>
      </VStack>
    </Center>
  )
}

export default memo(DropzoneComponent)
