<template>
  <div>
    <h1>{{ state.message }}</h1>
    <ChildComponent
      :message="state.message"
      @change-message="changeMessage"
    ></ChildComponent>
    <h2>{{ messageTwo }}</h2>
    <TaskList></TaskList>
    <Posts></Posts>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "@vue/composition-api"
import ChildComponent from "@/components/ChildComponent.vue"
import TaskList from "@/components/TaskList.vue"
import Posts from "@/components/Posts.vue"

export default defineComponent({
  components: {
    ChildComponent,
    TaskList,
    Posts,
  },
  setup() {
    const state = reactive({
      message: "Hello"
    })

    const changeMessage = (message: string) => {
      state.message = message;
    }

    const messageTwo = ref<string>("こんにちは")

    return {
      state,
      messageTwo,
      changeMessage,
    }
  }
})
</script>