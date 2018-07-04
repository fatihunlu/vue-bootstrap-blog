<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="https://github.com/fatihunlu"> 
    <img src="/static/github.ico" width="30" height="30" class="d-inline-block align-top" alt="">
    YourBlog
  </a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" :class="{ 'active' : selectedTabIndex === 1 }">
          <router-link class="nav-link" :to="{ name: 'HomePage' }" v-on:click.native="changeTabIndex(1)">Home</router-link>
        </li>
        <li class="nav-item" :class="{ 'active' : selectedTabIndex === 2 }">
          <router-link class="nav-link" :to="{ name: 'AboutPage' }"  v-on:click.native="changeTabIndex(2)"> About </router-link>
        </li>
        <li class="nav-item" :class="{ 'active' : selectedTabIndex === 3 }">
          <router-link class="nav-link" :to="{ name: 'ServicesPage' }" v-on:click.native="changeTabIndex(3)"> Services </router-link>
        </li>
        <li class="nav-item" :class="{ 'active' : selectedTabIndex === 4 }">
          <router-link class="nav-link disabled" :to="{ name: 'ContactPage' }" v-on:click.native="changeTabIndex(4)"> Contact </router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0 disabled" type="submit" @click.prevent=";">Search</button>
      </form>
    </div>
  </nav>
</template>

<script>


export default {
    data() {
        return {
          selectedTabIndex : 1
        }
    },
    methods: {
      changeTabIndex(index) {
        const vm = this;

        vm.selectedTabIndex = index;
      }
    }
}
</script>

<style>
  nav {
    font-size: 16px;
    font-weight: bold;
  }
</style>