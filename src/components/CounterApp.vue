<template>
  <div>
    <div>{{ state.count }}</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/composition-api"

export default defineComponent({
  setup() {
    // 状態
    const state = reactive<{
      count: number;
    }>({
      count: 0
    })

    // ロジック
    const increment = () => state.count++
    const decrement = () => state.count--

    return {
      state,
      increment,
      decrement,
    }
  }
})
</script>