<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>prop: {{propMessage}}</p>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
@Component({
  props: ['propMessage']
})
export default class HelloWorld extends Vue {
  msg = 'mssssgggg';
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: normal;
}
</style>
