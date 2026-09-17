<script setup lang="ts">
import { ref, watch } from 'vue'
import { FlexRender, useTable } from '@tanstack/vue-table';
import { allEmployees } from "@/data/employees.ts"
import { columns } from "@/data/columns.ts"
import { features } from "@/data/tableConfig.ts"
import { Funnel } from "lucide-vue-next"

const table = useTable({
  features,
  columns,
  data: allEmployees,
  globalFilterFn: 'includesString',

  initialState: {
    pagination: {
      pageIndex: 0,
      pageSize: 5,
    },
  },
})

const search = ref('');

// Pending (not yet applied) filter values
const pendingDepartment = ref('')
const pendingStatus = ref('')
const pendingRole = ref('')

watch(search, (val) => {
  table.setGlobalFilter(val)
  table.setPageIndex(0)
})

function applyFilters() {
  table.getColumn('department')?.setFilterValue(pendingDepartment.value || undefined)
  table.getColumn('status')?.setFilterValue(pendingStatus.value || undefined)
  table.setPageIndex(0)
}

function resetFilters() {
  search.value = ''
  pendingDepartment.value = ''
  pendingStatus.value = ''
  pendingRole.value = ''
  table.getColumn('department')?.setFilterValue(undefined)
  table.getColumn('status')?.setFilterValue(undefined)
  table.setGlobalFilter(undefined)
  table.setPageIndex(0)
}
</script>
<template>
  <div class="flex flex-col gap-6 px-6 py-4">
    <div>
      <h1 class="text-xl font-semibold text-primary-text">Employee</h1>
      <p class="mt-1 text-sm text-secondary-text">Here's whats happening with your team today</p>
    </div>

    <!-- Filter Bar -->
    <div class="flex items-end gap-6 rounded-lg border bg-background p-5">

      <!-- Search -->
      <div class="flex-1">
        <label class="mb-2 block text-sm font-medium text-primary-text">
          Search
        </label>
        <input
          v-model="search"
          type="text"
          placeholder="Search by name, email, or department"
          class="h-10 w-full rounded-md border px-3 text-sm outline-none focus:border-primary"
        />
      </div>

      <!-- Department -->
      <div class="w-56">
        <label class="mb-2 block text-sm font-medium text-primary-text">
          Department
        </label>

        <select
          v-model="pendingDepartment"
          class="h-10 w-full rounded-md border bg-background px-3 text-sm outline-none
             focus:border-primary"
        >
          <option value="">All Departments</option>
          <option>Engineering</option>
          <option>Marketing</option>
          <option>Design</option>
          <option>Sales</option>
          <option>HR</option>
        </select>
      </div>

      <!-- Status -->
      <div class="w-56">
        <label class="mb-2 block text-sm font-medium text-primary-text">
          Status
        </label>

        <select
          v-model="pendingStatus"
          class="h-10 w-full rounded-md border bg-background px-3 text-sm outline-none
             focus:border-primary"
        >
          <option value="">All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      <!-- Role -->
      <div class="w-56">
        <label class="mb-2 block text-sm font-medium text-primary-text">
          Role
        </label>

        <select
          v-model="pendingRole"
          class="h-10 w-full rounded-md border bg-background px-3 text-sm outline-none
             focus:border-primary"
        >
          <option value="">All Roles</option>
          <option>Frontend Developer</option>
          <option>Backend Developer</option>
          <option>Marketing Manager</option>
          <option>UI/UX Designer</option>
          <option>Sales Executive</option>
          <option>HR Specialist</option>
        </select>
      </div>

      <!-- Reset -->
      <button
        type="button"
        class="h-10 rounded-md border px-5 text-sm font-medium hover:bg-muted"
        @click="resetFilters"
      >
        ↻ Reset
      </button>

      <!-- Filter -->
      <button
        type="button"
        class="flex items-center gap-2 h-10 rounded-md border border-primary bg-primary px-5
           text-sm font-medium hover:bg-primary/90"
        @click="applyFilters"
      >
        <Funnel :size="16" />
        <span>
          Filter
        </span>
      </button>

    </div>


    <div class="overflow-hidden rounded-lg border bg-background">

      <!-- Table Header -->
      <div class="flex items-center justify-between px-5 py-4">
        <div>
          <h2 class="text-base font-semibold">
            Employees ({{ table.getFilteredRowModel().rows.length }})
          </h2>
        </div>
      </div>

      <!-- Table -->
      <table class="w-full">
        <thead class="border-y bg-muted/50">
        <tr
          v-for="headerGroup in table.getHeaderGroups()"
          :key="headerGroup.id"
        >
          <th
            v-for="header in headerGroup.headers"
            :key="header.id"
            class="px-4 py-3 text-left text-sm font-medium text-muted-foreground"
            :class="{ 'cursor-pointer select-none hover:text-primary-text': header.column.getCanSort() }"
            @click="header.column.getToggleSortingHandler()?.($event)"
          >
            <div class="flex items-center gap-1">
              <FlexRender
                v-if="!header.isPlaceholder"
                :render="header.column.columnDef.header"
                :props="header.getContext()"
              />
              <span v-if="header.column.getCanSort()" class="text-xs">
                <template v-if="header.column.getIsSorted() === 'asc'">↑</template>
                <template v-else-if="header.column.getIsSorted() === 'desc'">↓</template>
                <template v-else><span class="opacity-40">↕</span></template>
              </span>
            </div>
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

      <!-- Footer -->
      <div class="flex items-center justify-between border-t px-5 py-4">

        <!-- Result info -->
        <p class="text-sm text-muted-foreground">
          Showing 1–{{ table.getRowModel().rows.length }}
          of {{ table.getFilteredRowModel().rows.length }} results
        </p>

        <!-- Pagination -->
        <div class="flex items-center gap-1">

          <!-- Previous -->
          <button
            :disabled="!table.getCanPreviousPage()"
            @click="table.previousPage()"
            class="flex h-8 w-8 items-center justify-center rounded-md border text-sm
               hover:bg-muted disabled:pointer-events-none disabled:opacity-40"
          >
            ‹
          </button>

          <!-- Page numbers -->
          <button
            v-for="page in table.getPageCount()"
            :key="page"
            @click="table.setPageIndex(page - 1)"
            class="flex h-8 min-w-8 items-center justify-center rounded-md px-2 text-sm hover:bg-muted"
            :class="{ 'bg-primary': table.atoms.pagination.get().pageIndex === page - 1 }"
          >
            {{ page }}
          </button>

          <!-- Next -->
          <button
            :disabled="!table.getCanNextPage()"
            @click="table.nextPage()"
            class="flex h-8 w-8 items-center justify-center rounded-md border text-sm
               hover:bg-muted disabled:pointer-events-none disabled:opacity-40"
          >
            ›
          </button>

        </div>

      </div>

    </div>
  </div>
</template>
