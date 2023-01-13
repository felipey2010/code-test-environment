import { memo, useState, useCallback } from 'react'

import DeleteButton from './components/DeleteButton'
import { usePageManager } from '@upload/contexts/PageManager/Provider'
function FileDeleteButton({ fileId }) {
  const [loading, setLoadingButton] = useState(false)

  const { deleteFile } = usePageManager()

  const handleDeleteFile = useCallback(async () => {
    setLoadingButton(true)

    await deleteFile(fileId)

    setLoadingButton(false)
  }, [fileId])

  return (
    <DeleteButton
      isLoading={loading}
      text="Note: This action is irreversible."
      onDelete={handleDeleteFile}
    />
  )
}

export default memo(FileDeleteButton)
