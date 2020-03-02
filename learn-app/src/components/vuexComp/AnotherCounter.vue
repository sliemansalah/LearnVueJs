<template>
  <div class="text-center">
      <div>
          <!-- <button class="btn btn-primary" @click="increment">Increment</button>
          <button class="btn btn-primary" @click="decrement">Decrement</button>
        <hr> -->
        <button class="btn btn-primary" @click="asyncIncrement({by: 50, duration: 500})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 50, duration: 500})">Decrement</button>
      </div>
  </div>
</template>

<script>
    // import {mapMutations} from 'vuex'
    import {mapActions} from 'vuex'
    import * as types from '../..//store/types';
export default {
    methods: {
        // settimeOut

        // ...mapMutations([
        //     'increment',
        //     'decrement'
        // ])
        //   ...mapActions([
        //     'increment',
        //     'decrement'
        // ])
          ...mapActions({
                asyncIncrement: types.COUNTER_INCREMENT_ASYNC,
                asyncDecrement: types.COUNTER_DECREMENT_ASYNC
            })
        // increment(){
        //     this.$store.commit('increment')
        // },
        // decrement(){
        //      this.$store.commit('decrement')
        // }
    }
}
</script>

<style>

</style>