<template>
  <div>
    <div>
      <input type="text" v-model="taskNameRef" />
      <button @click="addTask">Add</button>
    </div>
    <div>
      <input type="text" v-model="searchTextRef" />Search
    </div>
    <div class="task-list-wrapper">
      <ul>
        <h4>DOING</h4>
        <li v-for="(task, index) in doingTasks" :key="index">
          <input type="checkbox" :checked="task.status" disabled/>
          <label>{{ task.name }}</label>
          <button @click="toggleTask(task, true)">toggle</button>
        </li>
      </ul>
      <ul>
        <h4>COMPLETED</h4>
        <li v-for="(task, index) in completedTasks" :key="index">
          <input type="checkbox" :checked="task.status" disabled/>
          <label>{{ task.name }}</label>
          <button @click="toggleTask(task, false)">toggle</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch, ref, isRef } from "@vue/composition-api"

const useTaskList = () => {
  const tasksRef = ref([])

  const toggleTask = (task, status) => {
    const index = tasksRef.value.indexOf(task)
    tasksRef.value.splice(index, 1, { ...task, status: status })
  }

  return {
    tasksRef,
    toggleTask,
  }
}

const useAddingTask = (tasksRef) => {
  const taskNameRef = ref('')

  const addTask = () => {
    tasksRef.value.push({
      name: taskNameRef.value,
      staus: false,
    })
    taskNameRef.value = ''
  }

  return {
    taskNameRef,
    addTask,
  }
}

const useFilter = (tasks = []) => {
  const tasksRef = isRef(tasks) ? tasks : ref(tasks)
  const valid = Array.isArray(tasksRef.value)

  const doingTasks = valid ?
    computed(() => tasksRef.value.filter(t => !t.status)) :
    () => { return [] }
  const completedTasks = valid ?
    computed(() => tasksRef.value.filter(t => t.status)) :
    () => { return [] }
  
  return {
    doingTasks,
    completedTasks,
  }
}

const useSearcher = (tasks = []) => {
  const searchTextRef = ref('')
  const tasksRef = ref(tasks)
  const valid = Array.isArray(tasksRef.value)

  const search = valid ?
    computed(() => tasksRef.value.filter(t => t.name.includes(searchTextRef.value))) :
    () => { return [] }
  
  return {
    searchTextRef,
    search,
  }
}

export default defineComponent({
  setup() {
    const { tasksRef, toggleTask } = useTaskList()
    const { taskNameRef, addTask } = useAddingTask(tasksRef)
    const { searchTextRef, search } = useSearcher(tasksRef.value)
    const { doingTasks, completedTasks } = useFilter(search)

    watch([doingTasks, completedTasks], () => {
      console.log("doingTasks: ", doingTasks.value)
      console.log("completedTasks: ", completedTasks.value)
    })

    return {
      // Mutable state
      tasksRef,
      taskNameRef,
      searchTextRef,
      // Functions
      addTask,
      toggleTask,
      // Computed
      doingTasks,
      completedTasks,
    }
  }
})

/*
// 切り出さないバージョン
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
      doingTasks: computed(() => state.searchedTasks.filter(t => !t.status)),
      completedTasks: computed(() => state.searchedTasks.filter(t => t.status)),
      searchedTasks: computed(() => state.tasks.filter(t => t.name.includes(state.searchText))),
    })

    function addTask() {
      console.log("addTask")
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
*/
</script>

<style scoped>
.task-list-wrapper {
  display: flex;
  justify-content: center;
}
</style>