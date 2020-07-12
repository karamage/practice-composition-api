import usePagination from './use-pagination'
import { computed, Ref } from "@vue/composition-api"

export default function useArrayPagination(arrayRef:Ref<any[]>, paginationOptions = {}) {
  const pagination = usePagination({
    ...paginationOptions,
    total: computed(() => arrayRef.value.length),
  })

  const result = computed(() => {
    const array = arrayRef.value
    if (!Array.isArray(array)) return []
    return array.slice(
      pagination.offset.value,
      pagination.offset.value + pagination.perPage.value
    )
  })
  return {
    ...pagination,
    result,
  }
}