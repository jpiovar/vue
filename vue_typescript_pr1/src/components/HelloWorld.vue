<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>prop: {{propMessage}}</p>
    <p>computed: {{computedMsg}}</p>
    <p>store itemObj: {{storeValueItemObj}}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import {
  // State,
  Getter
  // Action,
  // Mutation,
  // namespace
} from 'vuex-class';

@Component({
  props: {
    propMessage: String
  }
})

export default class HelloWorld extends Vue {
  msg = 'mssssgggg';
  // @Getter('getItemObj') getItemObjCurrent;
  @Getter getItemObj;
  // computed
  get computedMsg() {
    return 'computed'.concat(this.msg).concat(this.$props.propMessage);
  }
  get storeValueItemObj() {
    return this.getItemObj;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
