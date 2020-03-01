<template>
  <div id="learnvuejs-template-syntax-instance">
    <h4 style="color:#22f41f;font-weight:bold;">Template Syntax & Instance</h4>
    <br />
    <p>
      <span style="color:brown;font-weight:bold;">inside body tag</span>
    </p>
    <hr />
    <code>
      &lt;div id="app"&gt;
      <br />&lt;p&gt; &#65371;&#65371;
      sayHello() &#125; &#125;
      &lt;/p&gt;
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
                title: 'Hello World!'
            },
            methods:{
             sayHello: function(){
              return 'Hello';
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
        <p>{{ sayHello() }}</p>
      </div>
    </result>
    <hr />
  </div>
</template>

<style scoped>
#learnvuejs-template-syntax-instance {
  padding: 30px;
}
</style>

<script>
export default {
  data() {
    return {
      title: "Hello World!"
    };
  },
  methods: {
    sayHello: function() {
      return "Hello";
    }
  }
};
</script>