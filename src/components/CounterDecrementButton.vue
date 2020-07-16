<template>
  <button @click="decrement">-</button>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import useCounter from "@/composables/use-counter"

export default defineComponent({
  setup() {
    const { decrement } = useCounter()
    return {
      decrement,
    }
  }
})
</script>