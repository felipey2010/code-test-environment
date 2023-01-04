import { memo } from 'react'
import { useColorMode, IconButton } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

function ThemeToggleButton({ ...rest }) {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      aria-label="Botão para alternar o tema"
      variant="ghost"
      onClick={toggleColorMode}
      icon={
        colorMode === 'light' ? (
          <MoonIcon variant="solid" />
        ) : (
          <SunIcon variant="solid" />
        )
      }
      {...rest}
    />
  )
}

export default memo(ThemeToggleButton)
