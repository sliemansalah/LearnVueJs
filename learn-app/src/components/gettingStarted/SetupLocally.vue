<template>
  <div id="learnvuejs-setup-locally">
    <h4 style="color:#22f41f;font-weight:bold;">Setup Locally</h4>
    <br />
    <p>
      <span style="color:brown;font-weight:bold;padding-right:15px;">inside Head tag</span>
      <a
        href="https://vuejs.org/js/vue.js"
        target="_blank"
        style="color:white;"
        class="btn btn-primary"
      >vue.js file</a>
    </p>
    <hr />
    <code>&lt;script src="vue.js"&gt;&lt;/script&gt;</code>
    <hr />
    <p>
      <span style="color:brown;font-weight:bold;">inside body tag</span>
    </p>
    <hr />
    <code>
      &lt;div id="app"&gt;
      <br />&lt;input type="text" v-on:input="changeTitle"/&gt;
      <br />&lt;p&gt; &#65371;&#65371;
      title &#125; &#125;
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
        el: "#app",
        data: {
          title: "Hello Vue.JS"
          },
          methods: {
            changeTitle: function(event) {
            this.title = event.target.value;
          }
        }
      });
      </pre>
      <hr />
    </code>

    <result style="text-align:center;">
      <p>
        <span style="color:red;font-weight:bold;">Result</span>
      </p>
      <hr />
      <div>
        <input type="text" @input="changeTitle" />
        <br />
        <br />
        <p>{{ title }}</p>
      </div>
    </result>
    <hr />
  </div>
</template>

<style scoped>
#learnvuejs-setup-locally {
  padding: 30px;
}
</style>

<script>
export default {
  data() {
    return {
      title: "Hello Vue.JS"
    };
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
    }
  }
};
</script>