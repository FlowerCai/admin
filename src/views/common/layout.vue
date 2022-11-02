<template>
  <t-layout class="main-layout">
    <t-aside>Aside</t-aside>
    <t-layout>
      <GlobalHeader></GlobalHeader>
      <t-content>
        <router-view></router-view>
      </t-content>
      <t-footer>Footer</t-footer>
    </t-layout>
  </t-layout>
</template>

<script setup lang="ts">
import GlobalHeader from './header.vue'
</script>

<style lang="less" scoped>
.main-layout {
  height: 100vh;
}
</style>
