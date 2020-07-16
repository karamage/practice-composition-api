<template>
  <div>
    <div>{{ state.count }}</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import useCounter from "@/composables/use-counter"

export default defineComponent({
  setup() {
    // 状態とロジックを外部に切り出せた!
    const { state, increment, decrement } = useCounter()
    return {
      state,
      increment,
      decrement,
    }
  }
})
</script>