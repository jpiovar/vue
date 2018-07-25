<template>
 <div> 
  <span class="info">{{msg}}</span>
 </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'About vue js'
    }
  }
}
</script>


<style scoped>
.info{
  color: blue;
}
</style>
