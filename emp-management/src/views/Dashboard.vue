<script setup lang="ts">
import {
  Users,
  Building2,
  SquareCheckBig,
  Settings
} from 'lucide-vue-next'

import Card from '@/components/Card.vue'
</script>
<template>
  <div class="flex flex-col gap-6 px-6 py-4">
    <div>
      <h1 class="text-xl font-semibold text-primary-text">Dashboard</h1>
      <p class="mt-1 text-sm text-secondary-text">Here's whats happening with your team today</p>
    </div>

    <div class="flex items-center justify-between">
      <Card :icon="Users" :size="20" title="Total Value"/>
      <Card :icon="Building2" title="Total Value"/>
      <Card :icon="SquareCheckBig" title="Total Value"/>
      <Card :icon="Settings" title="Total Value" />
    </div>

    <div>
      <h2>graph</h2>
      <h3>departmene</h3>
    </div>

    <div>
      <h1>recent empl</h1>
    </div>
  </div>
</template>
