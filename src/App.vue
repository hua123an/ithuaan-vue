<script setup>
import HomeHeaderView from "@/components/HomeHeaderView.vue";
import HomeFooterView from "@/components/HomeFooterView.vue";
</script>
<template>
  <a-layout-header>
    <HomeHeaderView />
  </a-layout-header>
  <RouterView />
  <a-layout-footer>
    <HomeFooterView />
  </a-layout-footer>




</template>
<style>

</style>