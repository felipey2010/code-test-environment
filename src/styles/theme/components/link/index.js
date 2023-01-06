const link = {
  baseStyle: {
    _hover: {
      textDecoration: 'none'
    }
  },
  sizes: {},
  variants: {
    basic: ({ colorMode, theme }) => {
      const borderColor = theme.colors.blue[colorMode === 'light' ? 400 : 600]

      return {
        _focus: {
          borderColor: 'transparent',
          boxShadow: `0 0 0 3px ${borderColor}`
        },
        rounded: 'md',
        display: 'block'
      }
    },
    'table-rom': ({ colorMode, theme }) => {
      return {
        m: 0,
        p: 0,
        verticalAlign: 'inherit',
        minW: '100%',
        display: 'table-row',
        borderBottomWidth: '1px',
        borderColor: 'borderColor',
        borderCollapse: 'collapse',
        _hover: { bg: theme.colors.gray[colorMode === 'light' ? 100 : 600] },
        _focus: {
          boxShadow: 'none',
          bg: theme.colors.gray[colorMode === 'light' ? 100 : 600]
        }
      }
    }
  },
  defaultProps: {
    variant: 'basic'
  }
}

export default link
