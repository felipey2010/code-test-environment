const getTextEditorQuillStyle = () => {
  return {
    '#text-editor-quill-basic .ql-editor': {
      backgroundColor: 'bgContent',
      width: '8.5in',
      borderTop: '1px solid',
      borderBottom: '1px solid',
      borderLeft: '1px solid',
      borderRight: '1px solid',
      borderColor: 'borderColor',

      color: 'dark'
    },

    '#text-editor-quill-basic .ql-container.ql-snow': {
      border: 'none',
      display: 'flex',
      justifyContent: 'center',
      color: 'light'
    },
    '#text-editor-quill-basic .ql-toolbar': {
      backgroundColor: 'bgContainer',
      fill: 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%)'
    },

    '@media print': {
      body: {
        background: 'none'
      },
      '#text-editor-quill-full-page .ql-editor': {
        width: '6.5in',
        height: '9in',
        padding: 0,
        margin: 0,
        boxShadow: 'none',
        alignSelf: 'flex-start'
      },
      '#text-editor-quill-full-page .ql-toolbar.ql-snow': {
        display: 'none'
      }
    }
  }
}

export default getTextEditorQuillStyle()
