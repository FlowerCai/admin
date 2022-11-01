import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosResponse
} from 'axios'
import { MessagePlugin } from 'tdesign-vue-next'
import type { ErrorResponse } from './types'

const BASE_URL: string = import.meta.env.VITE_API_BASE_URL

const request: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 60000
})
request.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  async (error: AxiosError<ErrorResponse>) => {
    const responseData: ErrorResponse | undefined = error.response?.data
    responseData && (await MessagePlugin.error(responseData.message))

    return Promise.reject(error)
  }
)
export default request
