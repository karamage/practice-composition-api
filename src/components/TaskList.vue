<template>
  <div>
    <div>
      <input type="text" v-model="state.taskName" />
      <button @click="addTask">Add</button>
    </div>
    <div>
      <input type="text" v-model="state.searchText" />Search
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, reactive, computed } from "@vue/composition-api"

export default defineComponent({
  setup() {
    type Task = {
      name: string;
      status: boolean;
    }
    const tasks: Task[] = []
    const state = reactive({
      taskName: '',
      searchText: '',
      tasks: tasks,
      // TODO ↓computedのせいで型がanyになる
      doingTasks: computed(() => state.searchedTasks.filters(t => !t.status)),
      completedTasks: computed(() => state.searchedTasks.filters(t => t.status)),
      searchedTasks: computed(() => state.tasks.filters(t => t.name.include(state.searchText))),
    })

    function addTask() {
      state.tasks.push({
        name: state.taskName,
        status: false,
      })
      state.taskName = ''
    }

    function toggleTask(task, status) {
      const index = state.tasks.indexOf(task)
      state.tasks.splice(index, 1, { ...task, status: status })
    }

    return {
      state,
      addTask,
      toggleTask,
    }
  }
})
</script>

<style scoped>
.task-list-wrapper {
  display: flex;
  justify-content: center;
}
</style>