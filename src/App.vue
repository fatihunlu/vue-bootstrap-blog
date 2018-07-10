<template>
  <div id="app" class="container">
    <nav-bar-component :show-searchbar="false"/>
    <div class="row">
      <div class="col-md-8">
        <router-view/>
      </div>
      <div class="col-md-4">
          <search-component />
          <categories-component />
          <side-widget-component/>
      </div>
    </div>
    <footer-component />
  </div>
</template>

<script>

// You can regist your component like that: (but we registered it on main.js with setupComponent methods)
// import NavBarComponent from './components/NavBarComponent.vue';
// import FooterComponent from './components/FooterComponent.vue';
// import SearchComponent from './components/core/SearchComponent.vue';
// import SideWidgetComponent from './components/core/SideWidgetComponent.vue';
// import CategoriesComponent from './components/core/CategoriesComponent.vue';

export default {
  name: 'App',
  // components: {
  //   NavBarComponent,
  //   FooterComponent,
  //   SearchComponent,
  //   SideWidgetComponent,
  //   CategoriesComponent
  // },
  data() {
    return {

    }
  }
}
</script>

<style>
</style>
