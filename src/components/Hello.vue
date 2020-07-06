<template>
  <div>
    <h2>{{ state.messageOne }}</h2>
    <h2>{{ messageTwo }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "@vue/composition-api"

export default defineComponent({
  setup() {
    const state = reactive<{ messageOne: string}>({
      messageOne: "Hello"
    })
    const messageTwo = ref<string>("こんにちは")

    return {
      state,
      messageTwo,
    }
  }
})
</script>