import type { AxiosResponse } from 'axios'
import request from './request'
import type { TokenRequest } from './types'

const createToken = (
  tokenRequest: TokenRequest
): Promise<AxiosResponse<string>> => {
  return request.post('/tokens', tokenRequest)
}

export default {
  createToken
}
