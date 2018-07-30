<template>
  <div class="wrapper">
    <h1>{{obj.title}}</h1>
    <div>
      {{obj.info}}
    </div>
    <div>
      <input type="text" id="search" v-model="searchInput"> you are searching: {{searchInput}}
    </div>
    <div>
      <input type="text" id="add" v-model="addInput"> <button :class="{'initClass':initStatus, 'normalClass':!initStatus}" :title="btnTitle" @click="addItem('o')">Add item</button>
    </div>
    <div>Original
      <ul>
        <li v-for="item in items">
        {{item.label}}
        </li>
      </ul>
    </div>
    <div>second index
      <ul>
        <li v-for="item in secondIndex">
        {{item.label}}
        </li>
      </ul>
    </div>
    <div>double
      <ul>
        <li v-for="item in doubleItems">
        {{item.label}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data () {
    return {
      btnTitle: 'button title',
      obj: {
        title: 'Todo list component',
        info: 'Todo list information'
      },
      searchInput: '',
      addInput: '',
      initStatus: true
    }
  },
  methods: {
    addItem (a) {
      debugger;
      console.log('ok');
      const idItem = 'id' + (this.items.length + 1);
      this.items.push({
        id: idItem,
        label: this.addInput,
        description: this.addInput + 'description'
      });
      this.addInput = '';
      this.initStatus = false;
    }
  },
  computed: {
    secondIndex () {
      return this.items.filter((item, index) => (index % 2 === 0));
    },
    items () {
      return this.$store.state.items;
    },
    doubleItems () {
      return this.$store.getters.doubleItems;
    }
  },
  created () {
    Event.$on('eventTriggered', () => {
      debugger;
    });
  }
}
</script>

<style scoped>
.wrapper{
  background: lightblue;
}
.initClass{
  background: red;
}
.normalClass{
  background: blue;
}
</style>
