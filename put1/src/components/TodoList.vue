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
      <button v-on:click="AddItem">Add item</button>
    </div>
    <div>
      <ul>
        <li v-for="item in items" :key="item.id">
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
      obj: {
        title: 'Todo list component',
        info: 'Todo list information'
      },
      items: [
        {
          id: 'id1',
          label: 'item1 abc',
          description: 'item1 is more complexed information about nothing'
        },
        {
          id: 'id2',
          label: 'item2 abcefgh',
          description: 'item2 is less complexed information about nothing'
        }
      ],
      searchInput: ''
    }
  },
  methods: {
    AddItem () {
      debugger;
      console.log('ok');
    }
  }
}
</script>

<style scoped>
.wrapper{
  background: lightblue;
}
</style>
