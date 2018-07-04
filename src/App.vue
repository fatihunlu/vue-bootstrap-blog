<template>
  <div id="app" class="container">
    <nav-bar-component />
    <router-view/>
    <footer-component />
  </div>
</template>

<script>

import NavBarComponent from './components/NavBarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    NavBarComponent,
    FooterComponent
  },
  data() {
    return {

    }
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
