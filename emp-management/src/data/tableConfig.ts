import {
  tableFeatures,
  rowPaginationFeature,
  createPaginatedRowModel,
  globalFilteringFeature,
  createFilteredRowModel
} from '@tanstack/vue-table'

export const features = tableFeatures({
  rowPaginationFeature,
  paginatedRowModel: createPaginatedRowModel(),

  globalFilteringFeature,
  filteredRowModel: createFilteredRowModel(),
})
