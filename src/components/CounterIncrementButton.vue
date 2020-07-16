<template>
  <button @click="increment">+</button>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import useCounter from "@/composables/use-counter"

export default defineComponent({
  setup() {
    const { increment } = useCounter()
    return {
      increment,
    }
  }
})
</script>