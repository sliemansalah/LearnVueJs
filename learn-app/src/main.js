import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
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
  mode: "history" /* or hash */
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");

