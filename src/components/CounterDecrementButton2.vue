<template>
  <button @click="decrement">-</button>
</template>

<script lang="ts">
import { defineComponent, inject } from "@vue/composition-api"
import { CounterStore } from "@/composables/use-counter"
import CounterKey from "@/composables/use-counter-key"

export default defineComponent({
  setup() {
    const { decrement } = inject(CounterKey) as CounterStore
    return {
      decrement,
    }
  }
})
</script>