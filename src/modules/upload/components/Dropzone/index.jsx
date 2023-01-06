import { memo } from 'react'

import DropzoneProvider from './context/Provider'
import DropzoneComponent from './Component'

function DropzoneComponentProvider(props) {
  return (
    <DropzoneProvider {...props}>
      <DropzoneComponent />
    </DropzoneProvider>
  )
}

export default memo(DropzoneComponentProvider)
