import PageManagerProvider from '../contexts/PageManager/Provider'

import Page from './Page'
export default function Upload() {
  return (
    <PageManagerProvider>
      <Page />
    </PageManagerProvider>
  )
}
