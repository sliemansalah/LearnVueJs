<template>
  <div id="gettingStarted">
    <ul class="list-group">
      <router-link to="/getting-started/first-app" tag="li" class="list-group-item">First App</router-link>
      <router-link
        to="/getting-started/setup-locally"
        tag="li"
        class="list-group-item"
      >Setup Locally</router-link>
    </ul>
    <br />
    <br />
    <ul class="list-group">
      <router-link
        to="/getting-started/template-syntax-instance"
        tag="li"
        class="list-group-item"
      >Template Syntax & Instance</router-link>
      <router-link
        to="/getting-started/accessing-data"
        tag="li"
        class="list-group-item"
      >Accessing Data</router-link>
      <router-link
        to="/getting-started/binding-to-attributes"
        tag="li"
        class="list-group-item"
      >Binding to Attributes</router-link>
      <router-link to="/getting-started/directives" tag="li" class="list-group-item">Directives</router-link>
      <router-link to="/getting-started/v-once" tag="li" class="list-group-item">V-once</router-link>
      <router-link to="/getting-started/output-html" tag="li" class="list-group-item">Output HTML</router-link>
    </ul>
    <br />
    <br />
    <ul class="list-group">
      <router-link to="/getting-started/events" tag="li" class="list-group-item">Events</router-link>
      <router-link to="/getting-started/event-object" tag="li" class="list-group-item">Event Object</router-link>
      <router-link
        to="/getting-started/arguments-events"
        tag="li"
        class="list-group-item"
      >Passing Arguments with Events</router-link>
    </ul>
    <router-link
      to="/getting-started/event-modifiers"
      tag="li"
      class="list-group-item"
    >Event Modifiers</router-link>
  </div>
</template>

<style scoped>
#gettingStarted {
  padding: 30px;
}
.list-group-item:hover {
  cursor: pointer;
  background: #1a6e05;
  color: white;
  font-weight: bold;
}
</style>