import axios from 'axios'
// import formatServerErrorResponse from '../formatServerErrorResponse'

export default axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  timeout: 50000,
  headers: {
    'Content-type': 'application/json',
    app_key: process.env.NEXT_PUBLIC_APP_KEY
  }
})
