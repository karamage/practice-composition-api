import { reactive, toRefs } from "@vue/composition-api"

export default function usePromise(fn: Function) {
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

  let lastPromise: Promise<any>
  const use = async (...args: any[]) => {
    state.error = null
    state.loading = true
    const promise = (lastPromise = fn(...args))
    try {
      const result = await promise
      if (lastPromise === promise) {
        state.result = result
      }
    } catch (e) {
      state.error = e
    } finally {
      state.loading = false
    }
  }

  return {
    ...toRefs(state),
    use,
  }
}