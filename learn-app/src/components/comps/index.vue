<template>
<div>
     <h3 class="title">Components</h3>
     <div class="text-center">
         <my-cmp></my-cmp>
        <hr>
     <myCmp></myCmp>
     </div>
     <hr>

     <div class="text-center container">
         <app-user></app-user>
     </div>

      <div class="text-center container">
         <!-- <app-quote quote="A wonderfull quote!"></app-quote> -->
         <app-quote>
         <!-- <h2>The Quote</h2> -->
          <h2> {{ quoteTitle }} </h2>
         <p>A wonderfull Quote</p>
         </app-quote>
       
     </div>

</div>
</template>
<script>
import mycmp from './my-cmp.vue';
import User from './User.vue';
import Quote from './Quote.vue';

export default {
    data(){
        return {
         quoteTitle: 'The Quote'
        }
    },
   components:{
    //    'my-cmp': mycmp,
       'myCmp': mycmp,
       appUser: User,
       appQuote: Quote,

   }
}
</script>
<style scoped>
div {
    /* border: 1px solid red; */
}
.title {
    color: brown;
    font-weight: bold;
    text-align: center;
}
</style>