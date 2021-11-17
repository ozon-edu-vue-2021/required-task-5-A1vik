<template>
  <div id="app">
    <div class="app__wrapper">
      <app-header />
      <router-view />
    </div>
  </div>
</template>

<script>
import AppHeader from "@/layouts/AppHeader";

export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.app__wrapper {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
