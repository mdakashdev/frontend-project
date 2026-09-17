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
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {
  FlexRender,
  useTable,
} from '@tanstack/vue-table'

import { employees } from '@/data/employees'
import { columns } from '@/data/columns'
import { features } from '@/data/tableConfig'

const table = useTable({
  features,
  columns,
  data: employees,
})
console.log("Table", table);
console.log("employees", employees);
console.log('COLUMNS:', columns);
console.log(
  'HEADER GROUPS:',
  table.getHeaderGroups()
)
</script>
<template>
  <div class="flex flex-col gap-6 px-6 py-4">
    <div>
      <h1 class="text-xl font-semibold text-primary-text">Dashboard</h1>
      <p class="mt-1 text-sm text-secondary-text">Here's whats happening with your team today</p>
    </div>

    <div class="flex items-center gap-2">
      <CCard class="w-full max-w-sm h-42">
        <CardHeader>
          <CardTitle class="font-normal">Total Value</CardTitle>
          <CardAction><Users :size="20" /></CardAction>
        </CardHeader>
        <CardContent class="text-2xl font-semibold">1248</CardContent>
        <CardFooter class="text-link">+12.5% from last month</CardFooter>
      </CCard>
      <CCard class="w-full max-w-sm h-42">
        <CardHeader>
          <CardTitle class="font-normal">Total Value</CardTitle>
          <CardAction><Building2 :size="20"/></CardAction>
        </CardHeader>
        <CardContent class="text-2xl font-semibold">1248</CardContent>
        <CardFooter class="text-link">+12.5% from last month</CardFooter>
      </CCard>
      <CCard class="w-full max-w-sm h-42">
        <CardHeader>
          <CardTitle class="font-normal">Total Value</CardTitle>
          <CardAction><SquareCheckBig :size="20" /></CardAction>
        </CardHeader>
        <CardContent class="text-2xl font-semibold">1248</CardContent>
        <CardFooter class="text-link">+12.5% from last month</CardFooter>
      </CCard>
      <CCard class="w-full max-w-sm h-42">
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

    <div class="overflow-hidden rounded-lg border">
      <div class="flex items-center justify-between p-4 border-b">
        <h1 class="text-xl font-semibold">Recent...</h1>
        <p>view all</p>
      </div>
      <table class="w-full">
        <thead class="border-b bg-muted/50">
        <tr
          v-for="headerGroup in table.getHeaderGroups()"
          :key="headerGroup.id"
        >
          <th
            v-for="header in headerGroup.headers"
            :key="header.id"
            class="px-4 py-3 text-left text-sm font-medium text-muted-foreground"
          >
            <FlexRender
              v-if="!header.isPlaceholder"
              :render="header.column.columnDef.header"
              :props="header.getContext()"
            />
          </th>
        </tr>
        </thead>

        <tbody>
        <tr
          v-for="row in table.getRowModel().rows"
          :key="row.id"
          class="border-b last:border-0 hover:bg-muted/50"
        >
          <td
            v-for="cell in row.getAllCells()"
            :key="cell.id"
            class="px-4 py-3 text-sm"
          >
            <FlexRender
              :render="cell.column.columnDef.cell"
              :props="cell.getContext()"
            />
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
