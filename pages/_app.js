import { useState, useEffect } from 'react'
import '@styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@styles/theme'
import { useRouter } from 'next/router'

import { Loader } from '@lib/components'

const defaultLayout = ({ children }) => <>{children}</>

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)
  const { isReady } = useRouter()

  useEffect(() => {
    if (isReady) setLoading(false)
  }, [isReady])

  const Layout = Component.Layout || defaultLayout
  return (
    <ChakraProvider theme={theme}>
      {loading ? (
        <Loader text="Loading..." height="100vh" />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </ChakraProvider>
  )
}

export default MyApp
