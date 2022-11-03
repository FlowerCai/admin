import request from './request'
import type { UserType } from './types'

const me = (): Promise<UserType> => {
  return request.get('/users/me')
}

export default {
  me
}
