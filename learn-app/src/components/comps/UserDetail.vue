<template>
  <div class="component">
     <h1>View Details</h1>
     <p>my details</p>
     <!-- <p>User Name:  {{name }}</p> -->
     <!-- <p>User Name:  {{myName }}</p> -->
          <p>User Name:  {{switchName() }}</p>
          <p>User Age: {{ userAge }}</p>
          <button @click="resetName">Reset Name</button>
          <button @click="resetFn()">Reset Name Function</button>
  </div>
</template>

<script>
import { eventBus } from '../../main';
export default {
  // props: ['name']
    // props: ['myName'],
        props: {
          // myName: [String, Array]
            myName: {
              type:String,
              required: true,
            },
            resetFn: Function,
            userAge: Number
        },

    methods:{
      switchName(){
        return this.myName.split("").reverse().join("")
      },
      resetName(){
        this.myName = 'Max';
        this.$emit('nameWasReset', this.myName); // from child to parent
      }
    },
    created(){
      eventBus.$on('ageWasEdited', (age) => {
        this.userAge = age;
      });
    }
}
</script>

<style scoped>
 .component {
    background-color: green;
    padding:15px;
  }
</style>