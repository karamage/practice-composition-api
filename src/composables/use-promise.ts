import { reactive, toRefs } from "@vue/composition-api"

export default function usePromise(fn:any) {
  if (!fn) {
    throw new Error(
      `[usePromise]: 1st argument is required (must be a function)`
    )
  }

  if (typeof fn !== 'function') {
    throw new Error(
      `[usePromise]: 1st argument has to be function, but receive ${typeof fn})`
    )
  }
  const state = reactive({
    loading: false,
    error: null,
    result: null,
  })

  let lastPromise
}