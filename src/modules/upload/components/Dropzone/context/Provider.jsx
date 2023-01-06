import { useRef, useContext } from 'react'
import { Input } from '@chakra-ui/react'

import DropzoneContext from './Context'
import formatFile from '../../../utils/formatFile'
import { useToast } from '@chakra-ui/react'

function DropzoneProvider({
  multiple = true,
  maxSize,
  acceptFiles,
  children,
  onUpload
}) {
  const inputRef = useRef(null)
  const toast = useToast()

  const checkFileIsAccept = (fileExtension) => {
    if (!acceptFiles) return true

    return acceptFiles.includes(fileExtension.toUpperCase())
  }

  const checkFileSize = (filesize) => {
    if (!maxSize) return true

    return maxSize >= filesize
  }

  const verifyFileValidators = (file) => {
    const isFileAccept = checkFileIsAccept(file.extension.toUpperCase())

    if (!isFileAccept) {
      toast({
        title: 'Extension error',
        position: 'top',
        description: 'The file extension is not permitted.',
        status: 'warning',
        duration: 2500,
        isClosable: true
      })

      return false
    }

    const isMaxSizeReach = checkFileSize(file.size)

    if (!isMaxSizeReach) {
      toast({
        title: 'File size',
        position: 'top',
        description: 'The size of the file is bigger than the size permitted.',
        status: 'warning',
        duration: 2500,
        isClosable: true
      })

      return false
    }

    return true
  }

  const dispatchFileUpload = async (files) => {
    let formatedFiles = Array.from(files).map((file) => {
      return formatFile(file)
    })

    formatedFiles = formatedFiles.filter((file) => {
      return verifyFileValidators(file)
    })

    if (formatedFiles.length > 0) await onUpload(formatedFiles)
  }

  const dispatchInputClick = async () => {
    inputRef.current.value = ''

    inputRef.current?.click()
  }

  const dispatchInputChange = async (event) => {
    if (event.target.files) dispatchFileUpload(event.target.files)
  }

  return (
    <DropzoneContext.Provider
      value={{
        acceptFiles,
        maxSize,
        dispatchFileUpload,
        dispatchInputClick
      }}
    >
      <Input
        ref={inputRef}
        type="file"
        onChange={dispatchInputChange}
        multiple={multiple}
        hidden
      />

      {children}
    </DropzoneContext.Provider>
  )
}

export default DropzoneProvider

export const useDropzone = () => useContext(DropzoneContext)
