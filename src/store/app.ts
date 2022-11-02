import type { AppState, TokenRequest } from '@/api/types'
import { defineStore, type StoreDefinition } from 'pinia'
import tokenApi from '@/api/token'

export const useAppStore: StoreDefinition<string, AppState> = defineStore(
  'app',
  {
    state: () => {
      return {
        token: ''
      }
    },
    persist: true,
    actions: {
      async login(loginForm: TokenRequest): Promise<void> {
        this.token = await tokenApi.createToken(loginForm)
      }
    }
  }
)
