<template>
  <div class="wrapper">
    <h1>{{obj.title}}</h1>
    <div>
      {{obj.info}}
    </div>
    <div>
      {{title1}} and {{title2}}
    </div>
    <button @click="eventTrigger">trigger event</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['title1', 'title2'],
  data () {
    return {
      obj: {
        title: 'About component title',
        info: 'About information'
      }
    }
  },
  methods: {
    eventTrigger () {debugger;
      Event.$emit('eventTriggered');
    }
  }
}
</script>

<style scoped>
.wrapper{
  background: green;
}
</style>
