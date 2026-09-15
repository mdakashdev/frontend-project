<script setup lang="ts">
import lemmy from '@/assets/lemmy.svg'
import {
  LayoutDashboard,
  Building2,
  CalendarDays,
  ChartNoAxesCombined,
  SquareCheckBig,
  Users,
  Settings
} from 'lucide-vue-next'
</script>
<template>
  <aside class="flex flex-col w-64 min-h-screen border-r border-slate-200 shadow-sm">
    <div class="p-6 font-semibold flex gap-3 items-center">
      Logo
<!--      <img :src="lemmy" alt="Vue Admin Logo" class="h-10 w-10" />-->
<!--      <span class="text-xl font-semibold">Vue Admin</span>-->
    </div>
    <nav>
      <a href="#" class="flex items-center gap-2">
        <span>Dashboard</span>
      </a>
    </nav>
<!--    <nav class="flex flex-col gap-6 px-6">-->
<!--      <a href="#" class="flex items-center gap-2">-->
<!--        <LayoutDashboard :size="20" />-->
<!--        <span>Dashboard</span>-->
<!--      </a>-->

<!--      <a href="#" class="flex items-center gap-2">-->
<!--        <Users :size="20" />-->
<!--        <span>Employee</span>-->
<!--      </a>-->

<!--      <a href="#" class="flex items-center gap-2">-->
<!--        <Building2 :size="20" />-->
<!--        <span>Departments</span>-->
<!--      </a>-->

<!--      <a href="#" class="flex items-center gap-2">-->
<!--        <SquareCheckBig :size="20" />-->
<!--        <span>Tasks</span>-->
<!--      </a>-->

<!--      <a href="#" class="flex items-center gap-2">-->
<!--        <CalendarDays :size="20" />-->
<!--        <span>Calender</span>-->
<!--      </a>-->

<!--      <a href="#" class="flex items-center gap-2">-->
<!--        <ChartNoAxesCombined :size="20" />-->
<!--        <span>Reports</span>-->
<!--      </a>-->

<!--      <a href="#" class="flex items-center gap-2">-->
<!--        <Settings :size="20" />-->
<!--        <span>Settings</span>-->
<!--      </a>-->
<!--    </nav>-->
<!--    <div class="mt-auto p-6 flex gap-2 items-center">-->
<!--      <Users :size="20"/>-->
<!--      <span>Mr. Users</span>-->
<!--    </div>-->
  </aside>
</template>
