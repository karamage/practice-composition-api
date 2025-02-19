import { ref, computed } from "@vue/composition-api"

export default function useSearcher (tasks = []) {
  const searchTextRef = ref('')
  const tasksRef = ref(tasks)
  const valid = Array.isArray(tasksRef.value)

  const search = valid ?
    computed(() => tasksRef.value.filter((t: any) => t.name.includes(searchTextRef.value))) :
    () => { return [] }
  return {
    searchTextRef,
    search,
  }
}
