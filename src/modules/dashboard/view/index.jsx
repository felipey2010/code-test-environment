import PageManagerProvider from '../contexts/PageManager/Provider'

import Page from './Page'

import { SEO } from '@lib/components'

export default function Upload() {
  return (
    <PageManagerProvider>
      <SEO title="Dashboard" />
      <Page />
    </PageManagerProvider>
  )
}
