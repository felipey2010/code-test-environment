const defaultErrorMessage = 'Server error'

const handleAxiosErrors = (error) => {
  const possibleErros = {
    404: 'Route not found'
  }

  return {
    header: {
      title: possibleErros[error?.response?.status] || defaultErrorMessage,
      success: false
    }
  }
}

const handleNetworkError = (error) => {
  let errorMessage = defaultErrorMessage

  if (error.message.includes('timeout')) {
    errorMessage = 'Server response time out'
  }

  return {
    header: {
      title: errorMessage,
      success: false
    }
  }
}

export default async function formatServerErrorResponse(error) {
  if (error.name === 'AxiosError') return handleAxiosErrors(error)

  if (error?.response?.data) return error.response.data

  if (error?.message) return handleNetworkError(error)
}
