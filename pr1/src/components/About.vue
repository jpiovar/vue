<template>
 <div> 
  <span class="info">{{msg}} and {{info}}</span>
  <span>{{getMsg('ok')}}</span>
 </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'About vue js',
      info: ''
    }
  },
  methods: {
    getMsg: function(a) {
      return 'get msg about' +a;
    }
  },
  created() {
    this.info = 'info'
  }
}
</script>


<style scoped>
.info{
  color: blue;
}
</style>
