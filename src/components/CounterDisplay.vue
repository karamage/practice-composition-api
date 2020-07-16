<template>
  <div>{{ state.count }}</div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import useCounter from "@/composables/use-counter"

export default defineComponent({
  setup() {
    const { state } = useCounter()
    return {
      state,
    }
  }
})
</script>