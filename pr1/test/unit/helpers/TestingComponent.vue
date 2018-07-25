<template>
    <div>
        <a v-for="(item, index) in items"
           id="item.name"
           :class="item.class"
           href="#"
           :key="index"
           @click.prevent="onClick">{{item.name}}</a>
    </div>
</template>

<script lang="ts">
    import Component from 'vue-class-component';
    import Vue from 'vue';

    const NAME: string = 'TestingComponent';

    @Component({
        props: {
            items: {
                type: Array
            }
        }
    })
    export default class TestingComponent extends Vue {
        name: string = NAME;
        transPrefix: string = 'components.common.masthead.hamburgerMenu';
        onClick(): void {}
    }
</script>
<style lang="scss" scoped></style>
