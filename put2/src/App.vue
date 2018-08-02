<template>
  <div id="app">
    <button @click="affectItemObj('ok')">affect store itemObj</button>
    <img src="./assets/logo.png">
    {{ok}}
    <HelloWorld :propMessage="propMessageApp"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {
  propMessageApp = 'propMessage ooookkkk';
  ok = 'ooookkkk';

  // method
  affectItemObj (parA) {
    this.$store.dispatch('affectItemObjAction', parA);
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
