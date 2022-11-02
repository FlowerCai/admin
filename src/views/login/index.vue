<template>
  <div class="login-container">
    <div class="content">
      <t-card>
        <h1>Admin</h1>
        <t-form
          ref="form"
          :colon="true"
          :label-width="0"
          class="login-form"
          :data="loginForm"
          :rules="rules"
          @submit="handleLogin"
        >
          <t-form-item name="username">
            <t-input
              clearable
              placeholder="请输入用户名"
              v-model="loginForm.username"
            >
              <template #prefix-icon>
                <Icon name="desktop" />
              </template>
            </t-input>
          </t-form-item>

          <t-form-item name="password">
            <t-input
              type="password"
              clearable
              placeholder="请输入密码"
              v-model="loginForm.password"
            >
              <template #prefix-icon>
                <Icon name="lock-on" />
              </template>
            </t-input>
          </t-form-item>

          <t-form-item>
            <t-button theme="primary" type="submit" block>登录</t-button>
          </t-form-item>
        </t-form>
      </t-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon, MessagePlugin, type SubmitContext } from 'tdesign-vue-next'
import type { TokenRequest } from '@/api/types'
import { reactive, ref } from 'vue'
import form from 'tdesign-vue-next/es/form'
import { useAppStore } from '@/store'
import { useRouter } from 'vue-router'

const loginForm = reactive<TokenRequest>({
  username: '',
  password: ''
})

const rules = {
  username: [
    {
      required: true,
      message: '请填写用户名'
    }
  ],
  password: [
    {
      required: true,
      message: '请填写密码'
    }
  ]
}
const appStore = useAppStore()
const loading = ref(false)
const router = useRouter()

const handleLogin = async ({ validateResult }: SubmitContext) => {
  if (validateResult !== true) {
    return
  }
  loading.value = true
  try {
    await appStore.login(loginForm)
    await MessagePlugin.success('登录成功')
    await router.push({ name: 'dashboard' })
  } finally {
    loading.value = false
  }
}
</script>

<style scoped lang="less">
.login-container {
  width: 100vw;
  height: 100vh;
  background-color: #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    width: 400px;
    h1 {
      text-align: center;
    }

    .login-form {
      margin: 20px 0;
    }
  }
}
</style>
