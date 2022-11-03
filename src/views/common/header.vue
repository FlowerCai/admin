<template>
  <t-header class="header">
    <div>边侧栏展开按钮</div>
    <div class="operation-area">
      <t-button theme="default" variant="text">
        <t-icon :name="value" /> 用户名
      </t-button>
    </div>
  </t-header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('user')
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
}
</style>
