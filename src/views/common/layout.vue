<template>
  <t-layout class="main-layout">
    <SideBar></SideBar>
    <t-layout>
      <GlobalHeader></GlobalHeader>
      <t-content class="content-layout">
        <router-view></router-view>
      </t-content>
      <t-footer style="text-align: center">
        Copyright @ 2021-2022 Admin
      </t-footer>
    </t-layout>
  </t-layout>
</template>

<script setup lang="ts">
import GlobalHeader from './header.vue'
import SideBar from './sidebar.vue'
</script>

<style lang="less" scoped>
.main-layout {
  height: 100vh;
  .content-layout {
    padding: 24px;
  }
}
</style>
