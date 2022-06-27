<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <NumCounter />
</template>

<script>

// NOTES: HelloWorld component is imported for App to use
import HelloWorld from './components/HelloWorld.vue'
import NumCounter from './components/NumCounter/NumCounter.vue'

// NOTES: App and components are exported for main.js to create Vue app
export default {
  name: 'App',
  components: {
    HelloWorld,
    NumCounter
  }
}
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
