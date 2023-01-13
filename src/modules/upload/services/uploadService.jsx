import http from '../config/http/defaultSettings'

class UploadFileService {
  upload(files, onUploadProgress) {
    console.log(files)
    let form_data = new FormData()

    form_data.append('file', files)

    return http.post('/uploads/general', form_data, {
      body: 'Test',
      headers: {
        'Content-type': 'multipart/form-data',
        'Content-length': `${files.length}`
      },
      onUploadProgress
    })
  }

  deleteFile(id) {
    return http.delete(`/files/delete/${id}`)
  }

  getFiles() {
    return http.get('/files/general')
  }
}

export default new UploadFileService()
