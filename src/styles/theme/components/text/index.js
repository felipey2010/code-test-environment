const text = {
  baseStyle: {
    lineHeight: '125%',
    fontSize: '0.875rem'
  },
  sizes: {},
  variants: {
    secondary: ({ theme, colorMode }) => {
      return {
        color: theme.colors.gray[colorMode === 'light' ? 400 : 500]
      }
    }
  },
  defaultProps: {}
}

export default text
