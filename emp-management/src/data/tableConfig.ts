import {
  tableFeatures,
  rowPaginationFeature,
  createPaginatedRowModel,
  columnFilteringFeature,
  globalFilteringFeature,
  createFilteredRowModel,
  filterFn_includesString,
  filterFn_equalsString,
  rowSortingFeature,
  createSortedRowModel,
  sortFn_text,
  sortFn_alphanumeric,
} from '@tanstack/vue-table'

export const features = tableFeatures({
  rowSortingFeature,
  sortedRowModel: createSortedRowModel(),
  sortFns: { text: sortFn_text, alphanumeric: sortFn_alphanumeric },

  rowPaginationFeature,
  paginatedRowModel: createPaginatedRowModel(),

  columnFilteringFeature,
  globalFilteringFeature,
  filteredRowModel: createFilteredRowModel(),

  filterFns: {
    includesString: filterFn_includesString,
    equalsString: filterFn_equalsString,
  },
})
