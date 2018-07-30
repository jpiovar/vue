<template>
  <div class="wrapper">
    <h1>{{obj.title}}</h1>
    <div>
      {{obj.info}}
    </div>
    <div>
      {{title1}} and {{title2}}
    </div>
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
  }
}
</script>

<style scoped>
.wrapper{
  background: green;
}
</style>
