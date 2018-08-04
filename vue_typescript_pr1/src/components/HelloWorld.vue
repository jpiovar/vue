<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>prop: {{propMessage}}</p>
    <p>computed: {{computedMsg}}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    propMessage: String
  }
})

export default class HelloWorld extends Vue {
  msg = 'mssssgggg';
  // computed
  get computedMsg() {
    return 'computed'.concat(this.msg).concat(this.$props.propMessage);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
