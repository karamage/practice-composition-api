<template>
  <div>{{ state.count }}</div>
</template>

<script lang="ts">
import { defineComponent, inject } from "@vue/composition-api"
import { CounterStore } from "@/composables/use-counter"
import CounterKey from "@/composables/use-counter-key"

export default defineComponent({
  setup() {
    const { state } = inject(CounterKey) as CounterStore
    return {
      state,
    }
  }
})
</script>