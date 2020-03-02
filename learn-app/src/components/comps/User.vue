<template>
  <div class="component">
     <h1>The User Component</h1>
     <p>I'm {{name}}</p>
     <button @click="changeName">Change my name</button>
     <p>Name is {{ name }} </p>
     <p>Age is {{ age }} </p>
     <hr>
     <div class="row">
       <div class="col-xs-12 col-sm-6">
         <app-user-details 
         :myName="name" 
         @nameWasReset="name = $event"
         :resetFn="resetName"
         :userAge="age"
         ></app-user-details>
       </div>
       <div class="col-xs-12 col-sm-6">
         <app-user-edit 
         :userAge="age" 
         @ageWasEdited="age = $event"></app-user-edit>
       </div>
     </div>
  </div>
</template>

<script>
import UserDetail from './UserDetail.vue'
import UserEdit from './UserEdit.vue'

export default {
  data(){
    return {
      name:'Max',
      age: 27
    }
  },
  methods:{
    changeName(){
    this.name ='slieman'
    },
    resetName(){
      this.name= 'Max'
    }
  },
components: {
  appUserDetails: UserDetail,
  appUserEdit: UserEdit
}
}
</script>

<style>
  .component {
    background-color: blue;
    padding:15px;
  }
</style>