<template>
  <div>
    <div>
      <span>props:</span>
      <span>{{ state.props.message }}</span>
    </div>
    <button @click="upperCaseMessage">To upper case</button>
  </div>
</template>

<script lang="ts">
import { onMounted, onUpdated, onUnmounted, defineComponent, SetupContext, reactive } from "@vue/composition-api"

type Props = {
  message: string;
}
export default defineComponent({
  props: {
    message: {
      type: String,
      default: "default Value"
    }
  },
  setup(props: Props, context: SetupContext) {
    onMounted(() => {
      console.log('mounted!')
    })
    onUpdated(() => {
      console.log("updated!")
    })
    onUnmounted(() => {
      console.log("unmounted!")
    })
    const state = reactive({
      props: props
      // message: props.message  // propsを値として受け取るとリアクティブじゃなくなる
    })
    const upperCaseMessage = () => {
      context.emit("change-message", props.message.toUpperCase())
    }
    return {
      state,
      upperCaseMessage
    }
  }
})
</script>
