<template>
  <div id="learnvuejs-first-app">
    <h4 style="color:#22f41f;font-weight:bold;">First App</h4>
    <br />
    <p>
      <span style="color:brown;font-weight:bold;">inside Head tag</span>
    </p>
    <hr />
    <code>&lt;script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"&gt;&lt;/script&gt;</code>
    <hr />
    <p>
      <span style="color:brown;font-weight:bold;">inside body tag</span>
    </p>
    <hr />
    <code>
      &lt;div id="app"&gt;
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
      el:'#app',
         data:{
           title:'Hello Vue.JS'
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

      <p>Hello Vue.JS</p>
    </result>
    <hr />
  </div>
</template>

<style scoped>
#learnvuejs-first-app {
  padding: 30px;
}
</style>