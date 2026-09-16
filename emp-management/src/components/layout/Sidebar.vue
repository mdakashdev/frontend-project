<script setup lang="ts">
import { RouterLink } from "vue-router";
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
  <aside class="flex flex-col w-64 min-h-screen border-sidebar-border shadow-sm">
    <div class="p-6 font-semibold flex gap-3 items-center">
      Logo
<!--      <img :src="lemmy" alt="Vue Admin Logo" class="h-10 w-10" />-->
<!--      <span class="text-xl font-semibold">Vue Admin</span>-->
    </div>
    <nav class="flex flex-col gap-4 px-6">
      <RouterLink
        to="/"
        class="flex items-center gap-2 rounded-md px-3 py-2 text-sidebar-text transition-colors"
        exact-active-class="bg-sidebar-active text-sidebar-text-active"
      >
        <LayoutDashboard :size="20" />
        <span>Dashboard</span>
      </RouterLink>
      <RouterLink
        to="/emp"
        class="flex items-center gap-2 rounded-md px-3 py-2 text-sidebar-text transition-colors"
        active-class="bg-sidebar-active text-sidebar-text-active"
      >
        <Users :size="20" />
        <span>List</span>
      </RouterLink>

<!--      <RouterLink-->
<!--        to="/new-emp"-->
<!--        class="flex items-center gap-2 rounded-md text-sidebar-text px-3 py-2 transition-colors"-->
<!--        active-class="bg-sidebar-active text-sidebar-text-active"-->
<!--      >-->
<!--        <Building2 :size="20" />-->
<!--        <span>Departments</span>-->
<!--      </RouterLink>-->

<!--      <RouterLink-->
<!--        to="/new-emp"-->
<!--        class="flex items-center gap-2 rounded-md px-3 py-2 text-sidebar-text transition-colors"-->
<!--        active-class="bg-sidebar-active text-sidebar-text-active"-->
<!--      >-->
<!--        <SquareCheckBig :size="20" />-->
<!--        <span>Tasks</span>-->
<!--      </RouterLink>-->

<!--      <RouterLink-->
<!--        to="/new-emp"-->
<!--        class="flex items-center gap-2 rounded-md px-3 py-2 text-sidebar-text transition-colors"-->
<!--        active-class="bg-sidebar-active text-sidebar-text-active"-->
<!--      >-->
<!--        <CalendarDays :size="20" />-->
<!--        <span>Calender</span>-->
<!--      </RouterLink>-->

<!--      <RouterLink-->
<!--        to="/new-emp"-->
<!--        class="flex items-center gap-2 rounded-md px-3 py-2 text-sidebar-text transition-colors"-->
<!--        active-class="bg-sidebar-active text-sidebar-text-active"-->
<!--      >-->
<!--        <ChartNoAxesCombined :size="20" />-->
<!--        <span>Reports</span>-->
<!--      </RouterLink>-->

<!--      <RouterLink-->
<!--        to="/new-emp"-->
<!--        class="flex items-center gap-2 rounded-md px-3 py-2 text-sidebar-text transition-colors"-->
<!--        active-class="bg-sidebar-active text-sidebar-text-active"-->
<!--      >-->
<!--        <Settings :size="20" />-->
<!--        <span>Settings</span>-->
<!--      </RouterLink>-->
    </nav>
    <div class="mt-auto p-6 flex gap-2 items-center">
      <Users :size="20"/>
      <span>Mr. Users</span>
    </div>
  </aside>
</template>
