import type { ColumnDef } from '@tanstack/vue-table'
import type { Employee } from '@/data/employees'
import { features } from '@/data/tableConfig'

export const columns: ColumnDef<typeof features, Employee>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    sortFn: 'text',
  },
  {
    accessorKey: 'department',
    header: 'Department',
    filterFn: 'equalsString',
    sortFn: 'text',
  },
  {
    accessorKey: 'email',
    header: 'Email',
    sortFn: 'text',
  },
  {
    accessorKey: 'joinDate',
    header: 'Join Date',
    sortFn: 'alphanumeric',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    filterFn: 'equalsString',
    sortFn: 'text',
  },
]
