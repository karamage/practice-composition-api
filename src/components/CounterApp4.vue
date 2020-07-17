<template>
  <div>
    <CounterDisplay2 />
    <CounterIncrementButton2 />
    <CounterDecrementButton2 />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from "@vue/composition-api"
import CounterDisplay2 from "@/components/CounterDisplay2.vue"
import CounterIncrementButton2 from "@/components/CounterIncrementButton2.vue"
import CounterDecrementButton2 from "@/components/CounterDecrementButton2.vue"
import CounterKey from "@/composables/use-counter-key"
import useCounter from "@/composables/use-counter"

export default defineComponent({
  components: {
    CounterDisplay2,
    CounterIncrementButton2,
    CounterDecrementButton2,
  },
  setup() {
    provide(CounterKey, useCounter())
    return {}
  }
})
</script>