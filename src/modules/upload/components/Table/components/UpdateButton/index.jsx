import { memo, useCallback, useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'

import { UpdateButton } from 'lib/components'
import UpdateForm from './components/UpdateForm'

function UpdateFileButton({ file }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [fileInformation, setFileInformation] = useState(file)
  const [loadingButton, setLoadingButton] = useState(false)

  const openDrawer = useCallback(async () => {
    setLoadingButton(true)

    // const response = await showFile(File.id)

    // if (response?.header?.success) setFileInformation(response.body.file)

    setLoadingButton(false)

    onOpen()
  }, [File.id])

  return (
    <>
      <UpdateButton onClick={openDrawer} isLoading={loadingButton} />

      <UpdateForm isOpen={isOpen} onClose={onClose} file={fileInformation} />
    </>
  )
}

export default memo(UpdateFileButton)
