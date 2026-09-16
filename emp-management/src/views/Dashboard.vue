<script setup lang="ts">
import {
  Users,
  Building2,
  SquareCheckBig,
  Settings
} from 'lucide-vue-next'

import Card from '@/components/Card.vue'
import EmployeeChart from "@/components/EmployeeChart.vue";
import DepartmentChart from "@/components/DepartmentChart.vue";
import {
  Card as CCard, CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
</script>
<template>
  <div class="flex flex-col gap-6 px-6 py-4">
    <div>
      <h1 class="text-xl font-semibold text-primary-text">Dashboard</h1>
      <p class="mt-1 text-sm text-secondary-text">Here's whats happening with your team today</p>
    </div>

    <div class="flex items-center gap-2">
      <CCard class="w-full max-w-sm">
        <CardHeader>
          <CardTitle class="font-normal">Total Value</CardTitle>
          <CardAction><Users :size="20" /></CardAction>
        </CardHeader>
        <CardContent class="text-2xl font-semibold">1248</CardContent>
        <CardFooter class="text-link">+12.5% from last month</CardFooter>
      </CCard>
      <CCard class="w-full max-w-sm">
        <CardHeader>
          <CardTitle class="font-normal">Total Value</CardTitle>
          <CardAction><Building2 :size="20"/></CardAction>
        </CardHeader>
        <CardContent class="text-2xl font-semibold">1248</CardContent>
        <CardFooter class="text-link">+12.5% from last month</CardFooter>
      </CCard>
      <CCard class="w-full max-w-sm">
        <CardHeader>
          <CardTitle class="font-normal">Total Value</CardTitle>
          <CardAction><SquareCheckBig :size="20" /></CardAction>
        </CardHeader>
        <CardContent class="text-2xl font-semibold">1248</CardContent>
        <CardFooter class="text-link">+12.5% from last month</CardFooter>
      </CCard>
      <CCard class="w-full max-w-sm">
        <CardHeader>
          <CardTitle class="font-normal">Total Value</CardTitle>
          <CardAction><Settings :size="20" /></CardAction>
        </CardHeader>
        <CardContent class="text-2xl font-semibold">1248</CardContent>
        <CardFooter class="text-link">+12.5% from last month</CardFooter>
      </CCard>
<!--      <Card :icon="Users" :size="20" title="Total Value"/>-->
<!--      <Card :icon="Building2" title="Total Value"/>-->
<!--      <Card :icon="SquareCheckBig" title="Total Value"/>-->
<!--      <Card :icon="Settings" title="Total Value" />-->
    </div>

    <div class="flex items-stretch gap-6">
      <div class="flex-1 border">
        <EmployeeChart />
      </div>
      <div class="w-1/3 border">
        <DepartmentChart />
      </div>
    </div>

    <div>
      <h1>recent empl</h1>
    </div>
  </div>
</template>
