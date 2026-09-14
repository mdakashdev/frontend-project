<script setup lang="ts">
import Header from "@/components/layout/Header.vue";
import Sidebar from "@/components/layout/Sidebar.vue"
</script>
<template>
  <div class="min-h-screen flex">
    <Sidebar/>

    <main class="flex-1">
      <Header />

      <RouterView/>
    </main>

  </div>
</template>
<style scoped></style>
