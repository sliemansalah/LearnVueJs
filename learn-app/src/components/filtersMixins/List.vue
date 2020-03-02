<template>
  <div class="text-center">
      <h3>Mixin</h3>
        <input type="text" v-model="filterText">
        <ul>
            <li v-for="fruit in filteredFruites" :key="fruit">
                {{fruit}}
            </li>
        </ul>
  </div>
</template>

<script>
import { fruitMixin } from '../../fruitMixin.js';
export default {
    mixins: [fruitMixin]
}
</script>

<style>

</style>