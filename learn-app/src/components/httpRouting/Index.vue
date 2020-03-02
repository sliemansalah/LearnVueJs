<template>
  <div class="text-center">
      <h3>Http and Routing</h3>
      <p> npm install vue-resource --save</p>

       <div class="form-group">
           <label>Username</label>
           <input type="text" class="form-control"
           v-model="user.username">
       </div>

        <div class="form-group">
           <label>Mail</label>
           <input type="text" class="form-control"
            v-model="user.email">
       </div>
       <button class="btn btn-primary" @click="submit">Submit</button>
       <hr>
        <button class="btn btn-primary" @click="fetchData">Get data</button>
        <br><br>
        <ul class="list-group">
            <li class="list-group-item"
             v-for="u in users" :key="u">
                {{ u.username }} - {{ u.email }}
            </li>
        </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
            user:{
                username: '',
                email: ''
            },
            users: [],
            resource: {}
        }
    },
    methods: {
        submit(){
            // this.$http.post('https://vuejs-http-5fddb.firebaseio.com/data.json', this.user).then(()=>{
            //    alert('add success');
            // },err => {
            //     alert(err);
            // });
            //  this.$http.post('', this.user).then(()=>{
            //    alert('add success');
            // },err => {
            //     alert(err);
            // });
            this.resource.save( {} , this.user);
        },
        fetchData(){
            this.$http.get('').then(resp => {
                // const date = resp.json();
                // alert(data);
                return resp.json();
            }).then(data => {
                // alert(data);
                const resultArray = [];
                for(let key in data){
                    resultArray.push(data[key]);
                }
                this.users = resultArray;
            })
        }
    },
        created(){
            this.resource= this.$resource('data.json')
        }
}
</script>

<style>

</style>