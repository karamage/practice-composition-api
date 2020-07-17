<template>
  <div id="app">
    <!-- Hello></!-->
    <!-- img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/ -->
    <!-- Posts / -->
    <CounterApp4 />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
//import HelloWorld from '@/components/HelloWorld.vue';
//import Hello from "@/components/Hello.vue"
//import Posts from "@/components/Posts.vue"
import CounterApp4 from "@/components/CounterApp4.vue"

export default Vue.extend({
  name: 'App',
  components: {
    //HelloWorld
    //Hello,
    //Posts,
    CounterApp4,
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
