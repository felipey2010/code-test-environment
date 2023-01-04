import getAccessibilityGlobalCSS from './class/accessibility'
import getScrollbar from './class/scrollbar'
import quillGlobalCSS from './class/quill'

const global = ({ theme, colorMode }) => {
  const isLightMode = colorMode === 'light'

  const scrollbarCSS = getScrollbar(isLightMode)
  const acessibilityCSS = getAccessibilityGlobalCSS(theme, isLightMode)

  return {
    '*': {
      boxSizing: 'border-box'
    },

    ...acessibilityCSS,
    ...scrollbarCSS,
    ...quillGlobalCSS
  }
}

export default global
