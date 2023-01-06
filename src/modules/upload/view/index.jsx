import PageManagerProvider from '../contexts/PageManager/Provider'

import { SEO } from '@lib/components'

import Page from './Page'
export default function Upload() {
  return (
    <PageManagerProvider>
      <SEO title="Upload" />
      <Page />
    </PageManagerProvider>
  )
}
