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
        >
          <t-form-item name="username">
            <t-input
              clearable
              placeholder="请输入用户名"
              v-model="loginForm.username"
            >
              <template #prefix-icon>
                <icon name="desktop" />
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
                <icon name="lock-on" />
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
import { Icon } from 'tdesign-vue-next'
import type { TokenRequest } from '@/api/types'
import { reactive } from 'vue'

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
