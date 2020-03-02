<template>
  <div class="text-center">
      <div>
          <!-- <button class="btn btn-primary" @click="increment">Increment</button>
          <button class="btn btn-primary" @click="decrement">Decrement</button> -->
            <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
      </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
    import * as types from '../../store/types';
export default {
    methods: {
        ...mapActions({
                increment: types.COUNTER_INCREMENT,
                decrement: types.COUNTER_DECREMENT
            })
        // increment(){
        //     // this.$emit('updated', 1);
        //     this.$store.state.counter++;
        // },
        // decrement(){
        //     // this.$emit('updated', -1);
        //      this.$store.state.counter--;
        // }
    }
}
</script>

<style>

</style>