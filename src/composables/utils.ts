import { ref, isRef } from "@vue/composition-api"

export const wrap = (v:any) => (isRef(v) ? v : ref(v))
export const unwrap = (v:any) => (isRef(v) ? v.value : v)