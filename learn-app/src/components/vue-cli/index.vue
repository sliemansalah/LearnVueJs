<template>
<div>
    <h1 class="text-center" style="color:red;">Section 2 on videos</h1>
     <h3 class="title">Interpolation with v-once</h3>
     <p class="text-center" v-once>{{ title }}</p>
     <hr>
     <h3 class="title">Interpolation Function</h3>
     <p class="text-center">{{ sayHello() }}</p>
      <hr>
     <h3 class="title">Interpolation Function2</h3>
     <p class="text-center">{{ sayHello2() }}</p>
     <hr>
       <h3 class="title">Binding to Attributes</h3>
        <div class="text-center">
            <a  v-bind:href="link">google</a><br>
             <a  :href="link">google</a>
        </div>
      <hr>
     <h3 class="title">v-html</h3>
     <p class="text-center" v-html="htmlLink" />
       <hr>
     <h3 class="title">Listining to events (v-on:click == @click)</h3>
    <div class="text-center">
        <button @click="increase">Increase 1</button>
        <button @click="increase2(2)">Incerease 2</button> <!-- $event to use event -->
        <button @click="counter--">Decrease 1</button>
        <button @click="counter-=2">Decrease 2</button>
        <p>{{ counter }}</p>
        <p>{{ counter > 10 ? 'Greater than 10' : 'Smaller than 10' }}</p>
        <p @mousemove="updateCoordinates">Coordinates: {{ x }} / {{ y }}</p>
        - <span @mousemove.stop="">Dead Spot</span>
        <p>when enter or space click alert</p>
        <input type="text" @keyup.enter.space="alertMe">
    </div>
    <hr>
       <h3 class="title">Two Way data bindings</h3>
        <div class="text-center">
             <input type="text" v-model="name" />
             <p>{{ name }}</p>
        </div>
        <hr>
         <h3 class="title">Computed vs Methods</h3>
         <div class="text-center">
             <p>Result: {{ result() }} | {{ output }} </p>
         </div>
         <hr>
        <h3 class="title">Watch</h3>
        <div class="text-center">
            <p>watch: execute code upon data changes</p>
        </div>
        <hr>
        <h3 class="title">Dynamic style with css</h3>
        <div class="text-center">
            <!-- <div class="box" 
            @click="attachRed = !attachRed"
            :class="{red: attachRed, blue: !attachRed}"></div> -->
             <div class="box" 
            @click="attachRed = !attachRed"
            :class="divClasses"></div>
            <div class="box" :class="{red: attachRed}"></div>
            <div class="box" :class="color"></div>
            <div class="box" :class="[color, {red: attachRed}]"></div>
            <div class="box" :style="{backgroundColor: color2 }"></div>
            <input type="text" v-model="color">
        </div>

        <hr>
         <h3 class="title">Dynamic style with css Example</h3>
        <div class="text-center">
          <input type="text" v-model="color">
          <input type="text" v-model="width">
          <div class="box" :style="myStyle"></div>
          <div class="box" :style="[myStyle, {height:width + 'px'}]"></div>
        </div>
     <hr>
     <h1 class="text-center" style="color:red;">Section 3 on videos</h1>
     <h3 class="title">v-if</h3>
     <div class="text-center">
         <p v-if="show">you can see mee</p>
          <!-- <p v-else>not see me</p> -->
          <p>you can also see me too </p>
         <button @click="show = !show">Switch</button>

         <template v-if="show">
             <h1>head1</h1>
             <p>p1</p>
         </template>
           <template v-else>
             <h1>head2</h1>
         </template>

          <p v-show="show">show me</p>
          <p v-show="!show">hide me</p>
           <!-- <template v-show="show">
             <h1>head1</h1>
             <p>p1</p>
         </template>
          <template v-show="!show">
             <h1>head2</h1>
         </template> -->
     </div>
     <hr>
          <h3 class="title">v-for</h3>
           <div style="margin-left:45%;">
            <ul>
                <li v-for="(item, i) in list" :key="i">{{ i+1 }} -  {{ item }}</li>
            </ul>
           </div>
           <div style="text-align:center;">
            <div v-for="(item2, i) in list" :key="i">
                <h1>{{item2}}</h1>
                <p>{{i}}</p>
            </div>
           </div>
           <hr>
             <h3 class="title">looping through objects</h3>
     <div class="text-center">
        <ul>
            <li v-for="person in persons" :key="person">
                <div v-for="(value, key, index) in person" :key="key">{{ key }}: {{ value }}  ({{ index }})</div>
                <hr>
            </li>
        </ul>
        <span v-for="n in 10" :key="n">{{ n }}</span> <!-- key = to keeping track of element  -->
        <hr>
     </div>
     <hr>
    <h1 style="color:red;text-align:center;">Section 5</h1>
    <h3 class="title">Lifecycle</h3>
    <div class="text-center">
        <h2>return alert to checkit</h2>
        <button @click="title = 'Changed'">Update title</button>
        <button @click="destroy">Destroy</button>
    </div>
      <h1 style="color:red;text-align:center;">Section 6</h1>
    <h3 class="title">WorkFlows</h3>
    <div class="text-center">
        <p>Simple -> cdn</p>
        <p>webpack-simple -> basic webpack</p>
        <p>webpack -> include testing</p>
        <p>browserify/browserify-simple</p>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return {
            title: 'Hello Vue',
            link:'http://www.google.com',
            htmlLink:'<a href="https://www.youtube.com">youtube</a>',
            counter:0,
            x:0,
            y:0,
            name:'',
            attachRed:false,
            color:'green',
            color2:'orange',
            width:100,
            show:true,
            list:['meat','fruit','cookies'],
            persons:[
                {name:' Max', age:'27', color:'red'},
                {name: 'Anna', age:'unknown', color:'blue'}
            ]
        }
    },
    computed:{
        output(){
            return this.counter > 5 ? 'greater than 5 ' : 'smaller than 5'
        },
        divClasses(){
            return {
                red:this.attachRed,
                blue:!this.attachRed
            }
        },
        myStyle(){
            return {
                backgroundColor:this.color,
                width: this.width + 'px'
            }
        }
    },
    watch:{
        counter(){
            setTimeout(() => {
                this.counter = 0;
            }, 2000);
        }
    },
    methods:{
        sayHello(){
            return 'Hello Function'
        },
        sayHello2(){
            this.title='Hello Function2'
            return this.title
        },
        increase(){
            this.counter++
        },
        increase2(val){
            this.counter+=val
        },
        updateCoordinates(event){
            this.x = event.clientX
            this.y = event.clientY
        },
        alertMe(){
            alert('Alert me')
        },
        result(){
            return this.counter > 5 ? 'greater than 5 ' : 'smaller than 5' 
        },
        destroy(){
            this.$destroy();
        }
    },
    beforeCreate(){
    //    alert('beforeCreate')
    },
    created(){
    //    alert('created')
    },
     beforeMount(){
    //    alert('beforeMount')
    },
    mounted(){
    //    alert('mounted')
    },
     beforeUpdate(){
    //    alert('beforeUpdate')
    },
    updated(){
    //    alert('updated')
    },
     beforeDestroy(){
    //    alert('beforeDestroy')
    },
    destroyed(){
    //    alert('destroyed')
    },
}
</script>
<style>
.title {
    color: brown;
    font-weight: bold;
    text-align: center;
}
.box {
    width: 100px;
    height: 100px;
    background-color: gray;
    display: inline-block;
    margin: 10px;
}
.red {
    background-color: red;
}
.blue {
    background-color: blue;
}
.green {
    background-color: green;
}
ul li {
    list-style: none;
}

</style>