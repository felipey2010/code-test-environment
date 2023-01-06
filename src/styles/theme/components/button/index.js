const button = {
  baseStyle: ({ theme }) => {
    return {
      fontWeight: 500,
      _focus: {
        boxShadow: `0 0 0 3px ${theme.colors.blue[400]}`
      }
    }
  },
  sizes: {
    xs: {
      rounded: 'sm'
    }
  },
  variants: {
    outline: {
      minWidth: 'max-content'
    }
  },
  defaultProps: {}
}

export default button
