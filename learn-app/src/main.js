import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import App from "./App.vue";

Vue.use(VueResource);
// Vue.http.options.root = "https://vuejs-http-5fddb.firebaseio.com/data.json";
Vue.http.options.root = "https://vuejs-http-5fddb.firebaseio.com";
// Vue.http.options.headers
Vue.http.interceptors.push((request, next) => {
  // alert(request);
    if(request.method == 'POST'){
      request.method = 'PUT'
    }
    // next();
    next(response => {
      response.json = () => {return {messages: response.body}}
    });
})
Vue.directive('highlight', {
  bind(el, binding){
    // el.style.backgroundColor = 'green';
    // el.style.backgroundColor = binding.value;
    var delay = 0;
    if(binding.modifiers['delayed']){
      delay = 3000;
    }
    setTimeout(() => {
      if(binding.arg == 'background'){
        el.style.backgroundColor = binding.value;
      }else{
        el.style.color = binding.value;
      }
    }, delay);
    // if(binding.arg == 'background'){
    //   el.style.backgroundColor = binding.value;
    // }else{
    //   el.style.color = binding.value;
    // }
  }
});

Vue.filter('to-lowercase',(value) => {
  return value.toLowerCase();
});

Vue.mixin({
  created(){
    // console.log('Global Mixin - Created Hook');
  }
})

import { routes } from "./routes";

// export const eventBus = new Vue();
export const eventBus = new Vue({
  methods: {
    changeAge(age){
      this.$emit('ageWasEdited', age);
    }
  }
});

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history" /* or hash */,

  scrollBehavior(to,from,savedPosition){
    if(savedPosition){
      return savedPosition;
    }
    if(to.hash){
      return {selector: to.hash}
    }
    // return {x: 0 , y:0 }
    // return {x: 0 , y:700 }
  }
});

// router.beforeEach((to, from, next) => {
//   alert('global beforeeach')
//   // next('/');
//   // next('');
//   next();
//   // if(true){
//   //   next();
//   // }else{
//   //   next(false);
//   // }
// })
new Vue({
  render: h => h(App),
  router
}).$mount("#app");

