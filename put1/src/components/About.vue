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
    <div>
      <button @click="affectItems('affectedItem')">Affect Items store</button>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'About',
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
    eventTrigger () {
      debugger;
      Event.$emit('eventTriggered');
    },
    // affectItems (a) {
    //   debugger;
    //   this.$store.dispatch('affectItemsAction', a);
    // }
    ...mapActions({
      affectItems: 'affectItemsAction'
    })
  }
}
</script>

<style scoped>
.wrapper{
  background: green;
}
</style>
