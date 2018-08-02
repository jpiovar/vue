<template>
  <div class="hello">
    <h1>{{ msg }} and {{computedMsg}}</h1>
    <p>prop: {{propMessage}}</p>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import {
  // State,
  Getter
  // Action,
  // Mutation,
  // namespace
} from 'vuex-class'

@Component({
  props: ['propMessage']
})
export default class HelloWorld extends Vue {
  msg = 'mssssgggg';
  // @Getter('getItemObj') getItemObjCurrent;
  @Getter getItemObj;

  // computed
  get computedMsg () {
    // return 'computed ' + this.msg + this.$store.getters.getItemObj;
    // return 'computed ' + this.msg + this.getItemObjCurrent;
    return 'computed ' + this.msg + this.getItemObj;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: normal;
}
</style>
