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

</div>
</template>
<script>
import mycmp from './my-cmp.vue';
import User from './User.vue'
export default {
   components:{
    //    'my-cmp': mycmp,
       'myCmp': mycmp,
       appUser: User
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