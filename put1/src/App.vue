<template>
  <div id="app">
    <About title1="title1 about" title2="title2 about"/>
    <TodoList/>
  </div>
</template>

<script>
import About from './components/About'
import TodoList from './components/TodoList'

export default {
  name: 'App',
  components: {
    About,
    TodoList
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
