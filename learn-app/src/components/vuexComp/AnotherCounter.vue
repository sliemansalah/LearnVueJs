<template>
  <div class="text-center">
      <div>
          <button class="btn btn-primary" @click="increment">Increment</button>
          <button class="btn btn-primary" @click="decrement">Decrement</button>
      </div>
  </div>
</template>

<script>
    // import {mapMutations} from 'vuex'
    import {mapActions} from 'vuex'

export default {
    methods: {
        // settimeOut

        // ...mapMutations([
        //     'increment',
        //     'decrement'
        // ])
          ...mapActions([
            'increment',
            'decrement'
        ])
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