<template>
  <div class="text-center">
      <h3>Http and Routing</h3>
      <p> npm install vue-resource --save</p>
    <p>npm i vue-router --save </p>
    <p>router-view element to show routerlink</p>
    <p>history or hash</p>
    <p>router-link to="/" tag="li" active-class="active" and add exact form home</p>
    <p>this.$router.push({path:'/'})</p>
     <p>in routes -> path:'/user:id/details'</p>
     <p>on data return  -> id: this.$route.params.id</p>
     <p>on watch:{'$route'(to,from){this.id = to.params.id}}</p>
     <p>nested routes -> children: {path:':id or :id/edit or '' ',component:compName}</p>
     <p>Inside router-link you can pass $route.params.id</p>
     <p>inside router add name:'NameOfComp'</p>
     <p>inside :to in routerlink you can add :to="{name:'name', params:{id: $route.params.id}, query: {local: 'en', q:100}, hash:'#data'}</p>
     <p>this will be go to-> search as ?local=en&q=100</p>
      <p>in edit page  = { { $route.query.locale } }</p>
      <p>in edit page  = { { $route.query.q } }</p>
      <p>router view can be give name="header-top" name="header-bottom"</p>
      <p>path redirect -> { path: 'redirect-me', redirect: '/user'}</p>
            <p>path redirect -> { path: 'redirect-me', redirect: {name: 'home'}}</p>
        <p>to catch all routes == {path:'*',redirect:'/'}</p>
        <p>you can pass hash fragment # if you need to get text after scrolling</p>
        <p>you can use on main scrollBehavior</p>
        <p>use router guards</p>
    <p></p>
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
            resource: {},
            node: 'data',
            confirmed:false 
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
            // this.resource.save( {} , this.user);
            this.resource.saveAlt(this.user);
        },
        fetchData(){
            // this.$http.get('data.json').then(resp => {
            //     // const date = resp.json();
            //     // alert(data);
            //     return resp.json();
            // }).then(data => {
            //     // alert(data);
            //     const resultArray = [];
            //     for(let key in data){
            //         resultArray.push(data[key]);
            //     }
            //     this.users = resultArray;
            // })
              this.resource.getData({node: this.node});
            //  this.resource.getData({node: this.node, another: test});
        }
    },
        created(){
            const customActions = {
                saveAlt: {method: 'POST'},
                getData: {method: 'GET'}
            };
            // this.resource= this.$resource('data.json')
            // this.resource= this.$resource('data.json', {}, customActions);
            this.resource= this.$resource('{node}.json', {}, customActions);

        },
        beforeRouteLeave(to, from, next){
            if(this.confirmed){
                next();
            }else{
                if(confirm('are you sure')){
                    next();
                }else{
                    next(false);
                }
            }
        }
}
</script>

<style>

</style>