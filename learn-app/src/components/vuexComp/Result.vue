<template>
  <!-- <p>Result is {{counter }}</p> -->
    <p>Counter is: {{ counter }}</p>
</template>

<script>
  import {mapGetters} from 'vuex';
    import * as types from '../../store/types';
export default {
    // props: ['counter']
    computed: {
         ...mapGetters({
                counter: types.DOUBLE_COUNTER
            })
        // counter() {
        //     return this.$store.state.counter;
        // }
    }
}
</script>

<style>

</style>