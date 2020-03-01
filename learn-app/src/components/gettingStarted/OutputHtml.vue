<template>
  <div class="learnvuejs">
    <h4 style="color:#22f41f;font-weight:bold;">Output HTML</h4>
    <br />
    <p>
      <span style="color:brown;font-weight:bold;">inside body tag</span>
    </p>
    <hr />
    <code>
      &lt;div id="app"&gt;
      <br />&lt;h1 v-once&gt;&#65371;&#65371; title &#125;&#125;&lt;/h1&gt;
      <br />&lt;p&gt; &#65371;&#65371;
      sayHello() &#125; &#125;
      &lt;/p&gt; - &lt;a target="_blank"
      <span
        style="color:red;font-weight:bold;"
      >:href</span>="link"&gt;Google&lt;/a&gt;
      <br />&lt;hr&gt;
      <br />&lt;p&gt; &#65371;&#65371; finishedLink &#125;&#125; &lt;/p&gt; &lt;!-- as a text not html--&gt;
      <br />&lt;p v-html="finishedLink"&gt;&lt;/p&gt;
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
                link: 'http://google.com',
                finishedLink: '&lt;a target="_blank" href="http://google.com"&gt;Google&lt;/a&gt;'
            },
            methods:{
             sayHello: function(){
              this.title = 'Hello!';
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
        <h1 v-once>{{ title }}</h1>
        <p>
          {{ sayHello() }} -
          <a target="_blank" :href="link">Google</a>
        </p>
        <hr />
        <p>{{ finishedLink }}</p>
        <!-- as a text not html-->
        <p v-html="finishedLink"></p>
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
      link: "http://google.com",
      finishedLink: '<a target="_blank" href="http://google.com">Google</a>'
    };
  },
  methods: {
    sayHello: function() {
      this.title = "Hello!";
      return this.title;
    }
  }
};
</script>