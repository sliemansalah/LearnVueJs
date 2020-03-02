<template>
  <div class="container">
      <h3 class="title">Basic input form binding</h3>
       <form>
           <div class="row">
               <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                   <h1>File a Complaint</h1>
                   <hr>
               </div>
               <div class="form-group">
                   <label for="email">Mail</label>
                   <input 
                   type="text"
                   id="email"
                   class="form-control"
                   :value="userData.email"
                   @input="userData.email = $event.target.value"
                   >
                     <!-- v-model="userData.email" -->
               </div>
               <div class="form-group">
                   <label for="password">Password</label>
                   <input 
                   type="password"
                   id="password"
                   class="form-control"
                    v-model.lazy="userData.password"
                   >
               </div>
               <div class="form-group">
                   <label for="age">Age</label>
                   <input 
                   type="number"
                   id="age"
                   class="form-control"
                    v-model="userData.age"
                   >
               </div>
           </div>
           <div class="row">
               <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                   <label for="message">Message</label><br>
                   <textarea  
                   id="message" 
                   rows="5"
                   class="form-control"
                   v-model="message">
                   </textarea>
               </div>
           </div>
           <div class="row">
               <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                   <label for="sendmail">
                       <input type="checkbox"
                        id="sendmail"
                        value="SendMail"
                         v-model="sendMail"> Send Mail
                       </label>
                       <label for="sendInformial">
                       <input type="checkbox"
                        id="sendInformial"
                        value="sendInformial"
                        v-model="sendMail"> Send Informial
                       </label>
               </div>
           </div>
             <div class="row">
               <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                   <label for="male">
                       <input type="radio"
                        id="male"
                        value="male"
                        v-model="gender"> male
                       </label>
                       <label for="female">
                       <input type="radio"
                        id="female"
                        value="female"
                        v-model="gender"> female
                       </label>
               </div>
           </div>

             <div class="row">
               <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                       <select 
                       id="priority" 
                       class="form-control"
                       v-model="selectedPriority"
                       >
                           <option v-for="priority in priorities" 
                           :key="priority" 
                         >{{ priority }} </option> <!--   :selected="priority == 'Medium'" -->
                       </select>
               </div>
           </div>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <app-switch v-model="dataSwitch"></app-switch>
            </div>
           <div class="row">
               <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                   <button
                   class="btn btn-primary"
                   @click.prevent="submitted"
                   >Submit!
                       </button>
               </div>
           </div>
       </form>
       <hr>
       <div class="row" v-if="isSubmitted">
           <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
               <div class="panel panel-default">
                   <div class="panel-heading">
                       <h4>Your Data</h4>
                   </div>
                   <div class="panel-body">
                       <p>Mail: {{ userData.email }} </p>
                       <p>Password: {{ userData.password }}</p>
                       <p>Age: {{ userData.age }} </p>
                       <p style="white-space: pre;">Message: {{ message }} </p>
                       <p><strong>Send Mail?</strong></p>
                       <ul>
                         <li v-for="item in sendMail" :key="item"> {{ item }} </li>
                       </ul>
                       <p>Gender: {{ gender }}</p>
                       <p>Prioriry: {{ selectedPriority }}</p>
                        <p>Switched: {{ dataSwitch }}</p>
                   </div>
               </div>
           </div>
       </div>


  </div>
</template>

<script>
import Switch from './Switch.vue';
export default {
    data(){
        return {
            // email:''
            userData:{
                email: '',
                password:'',
                age:''
            },
            message:'A new Text',
            sendMail: [],
            gender: 'Male',
            selectedPriority: 'High',
            priorities: ['High', 'Medium', 'Low'],
            dataSwitch: true,
            isSubmitted: false,
        }
    },
    methods:{
        submitted(){
            this.isSubmitted = true;
        }
    },
    components: {
        appSwitch: Switch
    }
}
</script>

<style>
    .title {
        color:blue;
        text-align: center;
    }
</style>