<template>
  <div>
    <CounterDisplay />
    <CounterIncrementButton />
    <CounterDecrementButton />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import CounterDisplay from "@/components/CounterDisplay.vue"
import CounterIncrementButton from "@/components/CounterIncrementButton.vue"
import CounterDecrementButton from "@/components/CounterDecrementButton.vue"

export default defineComponent({
  components: {
    CounterDisplay,
    CounterIncrementButton,
    CounterDecrementButton,
  },
  setup() {
    return {}
  }
})
</script>