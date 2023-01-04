const Textarea = {
  baseStyle: ({ theme }) => {
    return {
      borderColor: 'borderColor',
      borderRadius: 'md',
      _focus: {
        borderColor: 'transparent',
        boxShadow: `0 0 0 3px ${theme.colors.blue[400]}`
      }
    }
  },
  sizes: {},
  variants: {},
  defaultProps: {}
}

export default Textarea
