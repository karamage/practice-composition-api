import { reactive, ref, toRefs, computed, ComputedRef } from "@vue/composition-api"

function wait(promise: Promise<any>, n = 1500): Promise<any> {
  return new Promise(res => setTimeout(() => res(promise), n))
}

export default function useEndpoint(_ky: any, method: string, path: string, _options: {} = {}) {
  const ky = _ky.extend(_options)

  let abortController: AbortController | null
  const cancelPrevious = () => {
    abortController && abortController.abort()
    abortController = null
  }

  const _loading = ref(false)
  const state = reactive<{
    error: Error | null;
    _loading: ComputedRef<boolean>;
    promise: Promise<any> | null;
    result: any;
  }>({
    error: null,
    _loading: computed(() => _loading.value),
    promise: null,
    result: null,
  })

  const call = async (options: {}) => {
    state.error = null
    abortController = new AbortController()
    state.promise = wait(
      ky(path, {
        ...options,
        method,
        signal: abortController.signal,
      }).json()
    )
    try {
      _loading.value = true
      state.result = await state.promise
    } catch (e) {
      state.error = e
    } finally {
      _loading.value = false
    }

  }
  return {
    call,
    cancelPrevious,
    ...toRefs(state),
  }
}
