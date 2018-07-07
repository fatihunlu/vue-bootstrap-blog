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
</style>
