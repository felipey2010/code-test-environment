import { useMemo, useEffect, useContext, useState, useCallback } from 'react'

import PageManagerContext from './Context'

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

  const [uploadedFiles, setUploadedFiles] = useState([])
  const [filter, setFilter] = useState(defaultFilter)
  const [totalItems, setTotalItems] = useState(0)
  const [pagination, setPagination] = useState(defaultPagination)
  const [loadingFiles, setLoadingFiles] = useState(true)
  const [uploading, setUploading] = useState(false)

  const reloadFiles = useCallback(async () => {
    setLoadingFiles(true)

    const timer = setTimeout(() => {
      setFilter(defaultFilter)
      setUploadedFiles([])
      setLoadingFiles(false)
    }, Math.floor(Math.random() * 1500))

    return () => clearTimeout(timer)
  }, [filter, pagination])

  //Just a simulation of API call. Replace when API route is ready
  useEffect(() => {
    async function readAsyncData() {
      await reloadFiles()
    }

    readAsyncData()
  }, [filter, pagination])

  const startUpload = (files) => {
    setUploading(true)
    console.log('🚀 ~ file: Provider.jsx:54 ~ startUpload ~ files', files)
    setUploading(false)
  }

  /** Remove comment when API route is ready **/
  // const readArchives = useCallback(async ({ filter, pagination }) => {
  //   setLoadingFiles(true)

  //   const filters = {
  //     filter,
  //     pagination
  //   }

  //   const response = await _readArchives({ filters })

  //   if (response?.header?.title) {
  //     const { elements, totalElements } = response.body.archive

  //     setArchives(elements)
  //     setTotalItems(numberWithPunctuation(totalElements))
  //   }

  //   setLoadingFiles(false)
  // }, [])

  // const reloadArchives = useCallback(async () => {
  //   await readArchives({ filter, pagination })
  // }, [filter, pagination])

  // useEffect(() => {
  //   async function readAsyncData() {
  //     await readArchives({ filter, pagination })
  //   }
  //   readAsyncData()
  // }, [filter, pagination])

  return (
    <PageManagerContext.Provider
      value={{
        defaultFilter,
        filter,
        setFilter,
        totalItems,
        pagination,
        setPagination,
        uploadedFiles,
        loadingFiles,
        uploading,
        startUpload
      }}
    >
      {children}
    </PageManagerContext.Provider>
  )
}

export const usePageManager = () => useContext(PageManagerContext)
