<template>
  <div class="text-center">
      <h3>Animations</h3>
      <p>Transitions -> for single element</p>
      <hr>
      <h4>Fade Transition</h4>
      <button class="btn btn-primary" @click="show = !show">Show Alert</button>
      <br><br>
      <transition :name="'fade'">
          <div class="alert alert-info" v-if="show">This is some info</div>
          <!-- <div class="alert alert-info" v-if="show">This is some info</div> -->
      </transition>
      <br>
       <h4>Slide with fade Transition</h4>
      <button class="btn btn-primary" @click="show2 = !show2">Show Alert</button>
      <br><br>
      <!-- <transition-group>
           
       </transition-group> -->
        <transition name="slide" type="animation"> <!-- type = transition -->
          <div class="alert alert-info" v-if="show2">This is some info</div>
      </transition>
         <transition 
         name="fade" 
         appear>
          <div class="alert alert-info" v-show="show2">This is some info</div>
      </transition>

      <!-- <transition 
         appear
         enter-class=""
         enter-active-class="animated bounce"
         leave-class=""
         leave-active-class="animated shake"
         >
          <div class="alert alert-info" v-show="show2">This is some info</div>
      </transition> -->

       <transition 
         appear
         enter-active-class="animated bounce"
         leave-active-class="animated shake"
         >
          <div class="alert alert-info" v-show="show2">This is some info</div>
      </transition>

 <transition 
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @enter-cancelled="enter-cancelled"

    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    @leave-cancelled="leaveCancelled"
         >
          <div style="width:100px;height:100px;background-color:lightgreen;" v-if="show2">This is some info</div>
      </transition>

  </div>
</template>

<script>
export default {
    data(){
        return {
            show:false,
            show2:false
        }
    },
    methods:{
        // beforeEnter(){
        //     alert('beforeEnter')
        // },
        // enter(el,done){
        //     alert('enter')
        //     done();
        // },
        // afterEnter(){
        //     alert('after enter')
        // },
        //  enterCancelled(){
        //     alert('enterCancelled')
        // },
        // beforeLeave(){
        //     alert('beforeLeave')
        // },
        // leave(){
        //     alert('Leave')
        // },
        // afterLeave(){
        //     alert('afterLeave')
        // },
        // leaveCancelled(){
        //     alert('leaveCancelled')
        // }
    }
}
</script>

<style>
    .fade-enter {
        opacity: 0;
    }
    .fade-enter-active {
        transition: opacity 1s;
        /* opacity: 1; */
    }
    .fade-leave {
         /* opacity: 1; */
    }
    .fade-leave-active {
         transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter{
        opacity: 0;
        /* transform: translateY(20px); */
    }
    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }
    .slide-leave{

    }
    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
        
    }

    @keyframes slide-in {
        from{
            transform: translateY(20px)
        }
        to {
            transform: translateY(0)
        }
    }

    @keyframes slide-out {
        from{
            transform: translateY(0)
        }
        to {
            transform: translateY(20px)
        }
    }
</style>