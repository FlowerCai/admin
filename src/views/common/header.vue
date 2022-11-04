<template>
  <t-header class="header">
    <CollapseButton v-model:collapse="appStore.menuCollapse"></CollapseButton>
    <div class="operation-area">
      <t-dropdown :options="options" @click="clickHandler">
        <t-button theme="default" variant="text">
          <template #icon>
            <t-icon name="user" />
          </template>
          <!-- <t-icon :name="value" /> -->
          {{ userStore.currentUser && userStore.currentUser.nickname }}
        </t-button>
      </t-dropdown>
    </div>
  </t-header>
</template>

<script setup lang="ts">
import { useAppStore, useUserStore } from '@/store'
import { ref } from 'vue'
import CollapseButton from '@/components/CollapseButton.vue'
import type { DropdownOption } from 'tdesign-vue-next'
import { useRoute, useRouter } from 'vue-router'

const userStore = useUserStore()
const value = ref('user')

const appStore = useAppStore()
const router = useRouter()
const route = useRoute()
const options = [{ content: '退出登录', value: 'logout' }]

const clickHandler = async ({ value }: DropdownOption) => {
  switch (value) {
    case 'logout':
      await appStore.logout()
      await router.push(`login?redirect=${route.fullPath}`)
      break
    default:
      throw new Error('该指令无设置任何操作')
  }
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
}
</style>
