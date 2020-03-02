<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" tag="li" class="navbar-brand">Learn Vue.Js</router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <router-link to="/getting-started" tag="li" class="nav-item active">
          <a class="nav-link">Getting Started</a>
        </router-link>

        <router-link to="/vue-cli" tag="li" class="nav-item">
          <a class="nav-link">Vue CLI</a>
        </router-link>
        <router-link to="/components" tag="li" class="nav-item">
          <a class="nav-link">Components</a>
        </router-link>

        <router-link to="/forms" tag="li" class="nav-item">
          <a class="nav-link">Forms</a>
        </router-link>

        <router-link to="/directives" tag="li" class="nav-item">
          <a class="nav-link">Directives</a>
        </router-link>

        <router-link to="/filters-mixins" tag="li" class="nav-item">
          <a class="nav-link">Filters & Mixins</a>
        </router-link>

        <router-link to="/animations-transitions" tag="li" class="nav-item">
          <a class="nav-link">Animations & Transitions</a>
        </router-link>

        <router-link to="/http-routing" tag="li" class="nav-item">
          <a class="nav-link">Http & Routing</a>
        </router-link>

        <router-link to="/vuex" tag="li" class="nav-item">
          <a class="nav-link">VUEX</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  }
};
</script>

<style>
.navbar-brand {
  color: blue !important;
  font-size: 22px !important;
  font-weight: bold !important;
  font-style: italic !important;
}
.navbar-brand:hover {
  cursor: pointer !important;
}
</style>
