<template>
  <div id="app">
    <button @click="affectItemObj('ok')">affect store itemObj</button>
    <img src="./assets/logo.png">
    <HelloWorld :propMessage="propMessageApp"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import {
  // State,
  // Getter,
  // Action,
  // Mutation,
  namespace
} from 'vuex-class';
import { USER_NAME } from './stores/constants';
import HelloWorld from './components/HelloWorld';

const UserStore = namespace('user');

@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {
  propMessageApp = 'propMessage ooookkkk';
  ok = 'ooookkkk';

  @UserStore.Action affectItemObjAction: (obj: Object) => void;

  // @Action affectItemObjAction;
  // method
  affectItemObj(parA) {
    // this.$store.dispatch('affectItemObjAction', parA);
    // this.affectItemObjActionCurrent(parA);
    this.affectItemObjAction(parA);
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
