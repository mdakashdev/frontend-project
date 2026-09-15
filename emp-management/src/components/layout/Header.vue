<script setup lang="ts">
import {
  Search,
  Users,
  ChevronDown,
  Bell
} from 'lucide-vue-next'

import { Input } from '@/components/ui/input'
</script>
<template>
  <header class="flex items-center h-16 border-b border-slate-200 justify-between px-6">
    <div class="relative w-120">
      <Search
        :size="18"
        class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
      />
<!--      <input-->
<!--        type="search"-->
<!--        placeholder="Search anything"-->
<!--        class="w-full rounded-md border border-slate-200 bg-background py-2 pl-10 pr-3 outline-none focus:ring-2 focus:ring-blue-500"-->
<!--        required-->
<!--      />-->
    <Input
      placeholder="Search anything"
      class="pl-10"
    />
    </div>

    <div class="flex gap-3 items-center">
      <Bell :size="20" class="mr-4" />
      <Users :size="20" />
      <span>Mr. Users</span>
      <ChevronDown :size="20" />
    </div>
  </header>
</template>
