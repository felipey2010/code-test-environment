const input = {
  parts: ['field'],
  baseStyle: {},
  sizes: {
    xs: {
      field: {
        rounded: 'sm'
      }
    }
  },
  variants: {
    outline: ({ theme }) => {
      return {
        field: {
          borderColor: 'borderColor',
          borderRadius: 'md',
          _focus: {
            borderColor: 'transparent',
            boxShadow: `0 0 0 3px ${theme.colors.blue[400]}`
          }
        }
      }
    }
  },
  defaultProps: {}
}

export default input
