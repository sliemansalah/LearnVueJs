<template>
  <div class="learnvuejs">
    <h4 style="color:#22f41f;font-weight:bold;">Directives</h4>
    <br />
    <p>
      <span style="color:brown;font-weight:bold;">inside body tag</span>
    </p>
    <hr />
    <code>
      &lt;div id="app"&gt;
      <br />&lt;p&gt; &#65371;&#65371;
      sayHello() &#125; &#125;
      &lt;/p&gt; - &lt;a target="_blank"
      <span
        style="color:red;font-weight:bold;"
      >:href</span>="link"&gt;Google&lt;/a&gt;
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
                title: 'Hello World!',
                link: 'http://google.com'
            },
            methods:{
             sayHello: function(){
              return this.title;
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
        <p>
          {{ sayHello() }}
          <a target="_blank" :href="link">Google</a>
        </p>
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
      title: "Hello World!",
      link: "http://google.com"
    };
  },
  methods: {
    sayHello: function() {
      return this.title;
    }
  }
};
</script>