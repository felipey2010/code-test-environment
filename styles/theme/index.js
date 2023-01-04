import {
  extendTheme,
  withDefaultColorScheme,
  withDefaultSize
} from '@chakra-ui/react'

import colors from './colors'
import components from './components'
import fonts from './fonts'
import global from './global'
import semanticTokens from './semanticTokens'

const customTheme = extendTheme(
  {
    colors,
    components,
    fonts,
    semanticTokens,
    styles: {
      global
    }
  },

  withDefaultSize({ size: 'sm' }),
  withDefaultSize({ fontSize: 'sm', components: ['Text'] }),
  withDefaultSize({
    size: 'lg',
    components: ['Heading']
  }),
  withDefaultColorScheme({ colorScheme: 'primary' })
)

export default customTheme
