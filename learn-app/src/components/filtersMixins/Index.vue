<template>
  <div class="text-center">
      <h3>Filters</h3>
       <p>{{ text | toUppercase}}</p>
        <p>{{ text | toUppercase | to-lowercase}}</p>
        <p>{{ text | toUppercase | toLowercase}}</p> <!-- not resolve correct -->
        <hr>
        <input type="text" v-model="filterText">
        <ul>
            <!-- <li v-for="fruit in fruits" :key="fruit">
                {{fruit}}
            </li> -->
            <li v-for="fruit in filteredFruites" :key="fruit">
                {{fruit}}
            </li>
        </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
            text: 'Hello there',
            fruites: ['Apple', 'Banana', 'Mango', 'Melon'],
            filterText: ''
        }
    },
    filters:{
        // 'to-uppercase'(){
        // }
        toUppercase(value){
            return value.toUpperCase();
        }
    },
    computed:{
        filteredFruites(){
            return this.fruites.filter((el) =>{
                return el.match(this.filterText);
            })
        }
    }
}
</script>

<style>

</style>