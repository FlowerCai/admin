<template>
  <div class="login-container">
    <div class="content">
      <t-card>
        <h1>Admin</h1>
        <t-form ref="form" :colon="true" :label-width="0">
          <t-form-item name="account">
            <t-input clearable placeholder="请输入账户名">
              <template #prefix-icon>
                <desktop-icon />
              </template>
            </t-input>
          </t-form-item>

          <t-form-item name="password">
            <t-input type="password" clearable placeholder="请输入密码">
              <template #prefix-icon>
                <lock-on-icon />
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

<script setup lang="ts"></script>

<style scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  background-color: skyblue;
  margin: 0;
}
</style>
