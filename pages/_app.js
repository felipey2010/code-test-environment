import { Dashboard } from '../components'
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Dashboard>
        <Component {...pageProps} />
      </Dashboard>
    </ChakraProvider>
  )
}

export default MyApp
