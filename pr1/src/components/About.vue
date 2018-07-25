<template>
 <div> 
  <span class="info">{{msg}}</span>
  <span>{{getMsg('ok')}}</span>
 </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'About vue js'
    }
  },
  methods: {
    getMsg: function(a) {
      return 'get msg about' +a;
    }
  }
}
</script>


<style scoped>
.info{
  color: blue;
}
</style>
