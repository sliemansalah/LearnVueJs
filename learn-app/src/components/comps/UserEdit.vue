<template>
  <div class="component">
      <h1>you may be edit here</h1>
     <p>edit me !</p>
     <p>User Age {{ userAge }}</p>
     <button @click="editAge">Edit Age</button>
  </div>
</template>

<script>
  import { eventBus } from '../../main';
  export default {
  props:['userAge'],
  methods: { 
    editAge(){
      this.userAge = 30;
    //  this.$emit('ageWasEdited', this.userAge);
    // eventBus.$emit('ageWasEdited', this.userAge);
    eventBus.changeAge(this.userAge); 
    }
  }
}
</script>

<style scoped>
 .component {
    background-color: red;
    padding:15px;
  }
</style>