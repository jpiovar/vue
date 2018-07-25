<template>
  <div id="app">
    <h1>janko hrasko</h1>
    <HelloWorld/>
    <About/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import About from './components/About'

export default {
  name: 'App',
  components: {
    HelloWorld,
    About
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
