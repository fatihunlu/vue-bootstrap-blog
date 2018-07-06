import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import ContactPage from '@/pages/ContactPage';
import BlogPage from '@/pages/BlogPage';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/blog',
      name: 'BlogPage',
      component: BlogPage
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    },
    {
      path: '/services',
      name: 'ServicesPage',
      component: ServicesPage
    },
    {
      path: '/contact',
      name: 'ContactPage',
      component: ContactPage
    }
  ]
})
