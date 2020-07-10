import { computed, ref, toRefs, watch, Ref} from "@vue/composition-api"

export default function usePagination(options = {}) {
  const { perPage = ref(10), total = ref(0), startPage = ref(1) } = toRefs(
    options
  ) as { perPage:Ref<number>, total:Ref<number>, startPage:number }

  // Internal currentPage value
  const _currentPage = ref(startPage)
  // public readonly ref for the currentPage
  // changing the current Page is only possible through the provide methods (see below)
  const currentPage = computed(() => _currentPage.value)

  // Computed values
  const lastPage = computed(() =>
    total.value ? Math.ceil(total.value / perPage.value) : 0
  )
  const offset = computed(() =>
    Math.min((currentPage.value - 1) * perPage.value, total.value)
  )

  // Functions
  const set = (val:number) => {
    if (typeof val !== 'number') return
    _currentPage.value = minmax(val, 1, lastPage.value)
  }
  const prev = () => set(currentPage.value - 1)
  const next = () => set(currentPage.value + 1)
  const first = () => set(1)
  const last = () => set(lastPage.value)

  watch(
    [total, perPage],
    () => {
      if (_currentPage.value > lastPage.value) {
        _currentPage.value = lastPage.value
      }
    },
    //{ lazy: true } // default true
  )

  return {
    // Mutable state
    perPage,
    total,
    // Computed
    currentPage,
    lastPage,
    offset,
    // Funstions
    next,
    prev,
    first,
    last,
    set,
  }
}

function minmax(val:number, min:number, max:number) {
  if (val < min) return min
  if (val > max) return max
  return val
}