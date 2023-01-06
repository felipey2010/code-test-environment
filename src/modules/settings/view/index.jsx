import PageManagerProvider from '../contexts/PageManager/Provider'

import Page from './Page'

import { SEO } from '@lib/components'

export default function Settings() {
  return (
    <PageManagerProvider>
      <SEO title="Settings" />
      <Page />
    </PageManagerProvider>
  )
}
