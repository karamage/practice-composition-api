<template>
  <button @click="increment">+</button>
</template>

<script lang="ts">
import { defineComponent, inject } from "@vue/composition-api"
import { CounterStore } from "@/composables/use-counter"
import CounterKey from "@/composables/use-counter-key"

export default defineComponent({
  setup() {
    const { increment } = inject(CounterKey) as CounterStore
    return {
      increment,
    }
  }
})
</script>