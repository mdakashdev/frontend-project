import {
  tableFeatures,
  rowPaginationFeature,
  createPaginatedRowModel
} from '@tanstack/vue-table'

export const features = tableFeatures({
  rowPaginationFeature,
  paginatedRowModel: createPaginatedRowModel()
})
