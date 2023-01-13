import { useMemo, useEffect, useContext, useState, useCallback } from 'react'
import PageManagerContext from './Context'
import UploadFileService from '@upload/services/uploadService'
import { useDisclosure, useToast } from '@chakra-ui/react'

export default function PageManagerProvider({ children }) {
  const defaultFilter = useMemo(() => {
    return {
      name: '',
      id: '',
      unidade: ''
    }
  }, [])

  const defaultPagination = useMemo(() => {
    return {
      page: 1,
      limit: 10,
      sort: {
        by: 'id',
        order: 'DESC'
      }
    }
  }, [])

  const [droppedFiles, setDroppedFiles] = useState([])
  const [files, setFiles] = useState(null)
  const [filter, setFilter] = useState(defaultFilter)
  const [totalItems, setTotalItems] = useState(0)
  const [pagination, setPagination] = useState(defaultPagination)
  const [loadingFiles, setLoadingFiles] = useState(true)
  const [uploading, setUploading] = useState(false)
  // Progress bar
  const [progress, setProgress] = useState(0)

  const { isOpen, onClose, onOpen } = useDisclosure()

  const toast = useToast()

  const reloadFiles = useCallback(async () => {
    setLoadingFiles(true)

    // const timer = setTimeout(() => {
    //   setFilter(defaultFilter)
    //   setDroppedFiles([])
    //   setLoadingFiles(false)
    // }, Math.floor(Math.random() * 1500))
    // return () => clearTimeout(timer)

    const response = await UploadFileService.getFiles().catch((error) => {
      setLoadingFiles(false)
    })

    if (response?.success) {
      setFiles(response.data)
    }

    setLoadingFiles(false)
  }, [])

  useEffect(() => {
    async function readAsyncData() {
      await reloadFiles()
    }

    readAsyncData()
  }, [filter, pagination])

  const prepareUpload = async (files) => {
    setProgress(0)
    onOpen()
    setDroppedFiles(files)
    await simulateUploading(0)
  }

  async function simulateUploading(value) {
    const max = 100

    let current = value + Math.floor(Math.random() * 10 + 1)

    setProgress(current)

    if (current < max)
      setTimeout(
        async () => await simulateUploading(current),
        Math.floor(Math.random() * 1500)
      )
  }

  const startUpload = useCallback(async () => {
    if (!droppedFiles) return

    setUploading(true)

    const response = await UploadFileService.upload(droppedFiles)

    if (!response.success) {
      toast({
        title: 'Upload Error',
        duration: 3000,
        isClosable: true,
        status: 'error',
        position: 'top',
        description: response.error
      })
    } else {
      setDroppedFiles([])
      toast({
        title: 'Upload Successful',
        duration: 3000,
        isClosable: true,
        status: 'success',
        position: 'top',
        description: response.message
      })
    }

    setUploading(false)
  }, [])

  const removeFileFromStacked = useCallback((file) => {
    setDroppedFiles((droppedFiles) =>
      droppedFiles.filter((item) => item.name !== file.name)
    )
  }, [])

  const deleteFile = useCallback(async (fileID) => {
    setUploading(true)

    const response = await UploadFileService.deleteFile(fileID)

    if (!response.success) {
      toast({
        title: 'File Deletion Error',
        duration: 3000,
        isClosable: true,
        status: 'error',
        position: 'top',
        description: response.error
      })
    } else {
      setFiles({ ...files, data })
      setDroppedFiles([])

      toast({
        title: 'Upload Successful',
        duration: 3000,
        isClosable: true,
        status: 'success',
        position: 'top',
        description: response.message
      })
    }

    setUploading(false)
  }, [])

  const cancelUpload = () => {
    setUploading(false)
    setDroppedFiles([])
  }

  return (
    <PageManagerContext.Provider
      value={{
        defaultFilter,
        filter,
        setFilter,
        totalItems,
        pagination,
        setPagination,
        droppedFiles,
        uploading,
        startUpload,
        prepareUpload,
        cancelUpload,
        deleteFile,
        removeFileFromStacked,
        files,
        loadingFiles,
        isOpen,
        onClose,
        onOpen,
        progress
      }}
    >
      {children}
    </PageManagerContext.Provider>
  )
}

export const usePageManager = () => useContext(PageManagerContext)
