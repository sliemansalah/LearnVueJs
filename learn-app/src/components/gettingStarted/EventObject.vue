<template>
  <div class="learnvuejs">
    <h4 style="color:#22f41f;font-weight:bold;">Event Object</h4>
    <br />
    <p>
      <span style="color:brown;font-weight:bold;">inside body tag</span>
    </p>
    <hr />
    <code>
      &lt;div id="app"&gt;
      <br />&lt;button v-on:click="increase"&gt; Click me &lt;/button&gt;
      &lt;!-- you can use(mouseenter,mouseleave, etc..) for events of button--&gt;
      <br />&lt;p&gt; &#65371;&#65371; counter &#125;&#125; &lt;/p&gt;
      <br />&lt;p v-on:mousemove="updateCoordinates"&gt;Coordinates: &#65371;&#65371; x &#125;&#125; / &#65371;&#65371; y &#125;&#125;
      <br />&lt;/div&gt;
    </code>

    <hr />
    <p>
      <span style="color:brown;font-weight:bold;">inside script tag</span>
    </p>
    <code>
      <pre>
        new Vue({
            el: '#app',
            data: {
             counter: 0,
             x:0,
             y:0
            },
            methods:{
             increase: function(){
              this.counter++;
            },
            updateCoordinates: function(event){
             this.x = event.clientX;
             this.y = event.clientY;
            }
        }
    })
      </pre>
      <hr />
    </code>

    <result style="text-align:center;">
      <p>
        <span style="color:red;font-weight:bold;">Result</span>
      </p>
      <hr />
      <div>
        <button v-on:click="increase">Click me</button>
        <!-- you can use(mouseenter,mouseleave, etc..) for events of button-->
        <p>{{ counter }}</p>
        <p v-on:mousemove="updateCoordinates">Coordinates: {{ x }} / {{ y }}</p>
      </div>
    </result>
    <hr />
  </div>
</template>

<style scoped>
.learnvuejs {
  padding: 30px;
}
</style>

<script>
export default {
  data() {
    return {
      counter: 0,
      x: 0,
      y: 0
    };
  },
  methods: {
    increase: function() {
      this.counter++;
    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    }
  }
};
</script>