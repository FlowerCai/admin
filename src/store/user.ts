import type { UserType } from '@/api/types'
import { defineStore, type StoreDefinition } from 'pinia'
import userApi from '@/api/user'

type UserState = {
  currentUser: UserType | null
}
export const useUserStore: StoreDefinition = defineStore('user', {
  state: (): UserState => {
    return {
      currentUser: null
    }
  },
  persist: true,
  actions: {
    async fetchCurrentUser() {
      this.currentUser = await userApi.me()
    }
  }
})
