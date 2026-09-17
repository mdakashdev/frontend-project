import type { ColumnDef } from '@tanstack/vue-table'
import type { Employee } from '@/data/employees'
import { features } from '@/data/tableConfig'

export const columns: ColumnDef<typeof features, Employee>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'department',
    header: 'Department',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'joinDate',
    header: 'Join Date',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
]
