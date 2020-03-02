<template>
  <div class="text-center">
      <h3>VueX</h3>
      <div>
          <app-result :counter="counter"></app-result>
          <app-another-result></app-another-result>
          <hr>
          <app-counter @updated="counter+=$event"></app-counter>
          <app-another-counter></app-another-counter>
      </div>
  </div>
</template>

<script>
import Counter from './Counter.vue';
import Result from './Result.vue';
import AnotherResult from './AnotherResult.vue';
import AnotherCounter from './AnotherCounter.vue';

export default {
    data(){
        return {
            counter:0
        }
    },
    components: {
        appCounter: Counter,
        appResult: Result,
        appAnotherResult: AnotherResult,
        appAnotherCounter: AnotherCounter

    }
}
</script>

<style>

</style>