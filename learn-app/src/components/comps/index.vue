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
         <button @click="selectedComponent = 'appQuote'">Quote</button>
         <button @click="selectedComponent = 'appAuthor'">Author</button>
         <button @click="selectedComponent = 'appNew'">New</button>
         <hr>
         <p>{{ selectedComponente }} </p>
        
        <keep-alive>
             <component :is="selectedComponent">
             <p>Default Content</p>
         </component>
        </keep-alive>
        <!-- 
             <app-quote>
         -- <h2>The Quote</h2> 
          <h2 slot="title"> {{ quoteTitle }} </h2>
         -- <p slot="content">A wonderfull Quote</p> 
          <p>A wonderfull Quote</p>
         </app-quote>
            -->
        <!-- <app-author></app-author> -->
        
       
     </div>

</div>
</template>
<script>
import mycmp from './my-cmp.vue';
import User from './User.vue';
import Quote from './Quote.vue';
import Author from './Author.vue';
import New from './New.vue';

export default {
    data(){
        return {
         quoteTitle: 'The Quote',
         selectedComponent: 'appQuote'
        }
    },
   components:{
    //    'my-cmp': mycmp,
       'myCmp': mycmp,
       appUser: User,
       appQuote: Quote,
       appAuthor:Author,
       appNew: New

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