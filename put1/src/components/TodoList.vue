<template>
  <div class="wrapper">
    <h1>{{obj.title}}</h1>
    <div>
      {{obj.info}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data () {
    return {
      obj: {
        title: 'Todo list component',
        info: 'Todo list information'
      }
    }
  }
}
</script>

<style scoped>
.wrapper{
  background: lightblue;
}
</style>
