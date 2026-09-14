<script setup lang="ts">
import lemmy from '@/assets/lemmy.svg'
</script>
<template>
  <aside class="w-64 min-h-screen border-r">
    <div class="p-6 font-semibold flex">
      <img :src="lemmy" alt="Vue Admin Logo" class="h-10 w-10" />
      <span class="text-xl font-semibold ml-2 mt-1">Vue Admin</span>
    </div>
    <nav class="px-3 space-y-1">
      <a
        href="#"
        class="block rounded-md px-3 py-2 text-sm hover:bg-accent"
      >
        Dashboard
      </a>
    </nav>
  </aside>
</template>
