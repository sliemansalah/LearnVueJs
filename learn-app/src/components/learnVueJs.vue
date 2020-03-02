<template>
  <div id="learnvuejs">
    <ul class="list-group">
      <router-link to="/getting-started" tag="li" class="list-group-item">Getting Started</router-link>
      <router-link to="/vue-cli" tag="li" class="list-group-item">Vue Cli</router-link>
      <router-link to="/components" tag="li" class="list-group-item">Components</router-link>
      <router-link to="/forms" tag="li" class="list-group-item">Forms</router-link>
      <router-link to="/directives" tag="li" class="list-group-item">Directives</router-link>
      <router-link to="/filters-mixins" tag="li" class="list-group-item">Filters & Mixins</router-link>
      <router-link
        to="/animations-transitions"
        tag="li"
        class="list-group-item"
      >Animations & Transitions</router-link>
      <router-link to="/http-routing" tag="li" class="list-group-item">Http & Routing</router-link>
      <router-link to="/vuex" tag="li" class="list-group-item">VUEX</router-link>
    </ul>
  </div>
</template>

<style scoped>
#learnvuejs {
  padding: 30px;
}
.list-group-item:hover {
  cursor: pointer;
  background: #0a2df7;
  color: white;
  font-weight: bold;
}
</style>