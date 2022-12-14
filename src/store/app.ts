import type { AppState, TokenRequest } from '@/api/types'
import { defineStore } from 'pinia'
import tokenApi from '@/api/token'
import { useUserStore } from './user'

export const useAppStore = defineStore('app', {
  state: (): AppState => {
    return {
      token: '',
      menuCollapse: false
    }
  },
  persist: true,
  actions: {
    async login(loginForm: TokenRequest): Promise<void> {
      this.token = await tokenApi.createToken(loginForm)
    },

    async logout(): Promise<void> {
      const userStore = useUserStore()
      this.token = ''
      userStore.$reset()
    }
  }
})
