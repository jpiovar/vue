<template>
  <div class="hello">
    <h1>{{ msg }} and {{computedMsg}}</h1>
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

  // computed
  get computedMsg () {
    debugger;
    return 'computed ' + this.msg + this.$store.getters.getItemObj;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: normal;
}
</style>
