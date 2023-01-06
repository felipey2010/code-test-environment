import { memo } from 'react'
import { useColorMode, IconButton } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

function ThemeToggleButton({ ...rest }) {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      size="lg"
      aria-label="change theme"
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
