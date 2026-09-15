<script setup lang="ts">
import type { Component } from 'vue';

defineProps<{
  icon: Component,
  size?: number,
  title: string
}>();
</script>
<template>
  <div class="w-80 flex gap-2 border-1 bg-surface rounded-sm p-4">
    <div class="flex flex-col gap-3 px-3">
      <div>
        <h1>{{ title }}</h1>
        <p>1248</p>
      </div>
      <div>
        <p>+12.5% from last month</p>
      </div>
    </div>
    <div>
      <component :is="icon" :size="size" />
    </div>
  </div>
</template>
