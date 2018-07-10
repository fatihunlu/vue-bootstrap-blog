
import NavBarComponent from '../components/NavBarComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import SearchComponent from '../components/core/SearchComponent.vue';
import SideWidgetComponent from '../components/core/SideWidgetComponent.vue';
import CategoriesComponent from '../components/core/CategoriesComponent.vue';

function setupComponents(Vue){

  Vue.component('nav-bar-component', NavBarComponent);
  Vue.component('footer-component', FooterComponent);
  Vue.component('search-component', SearchComponent);
  Vue.component('side-widget-component', SideWidgetComponent);
  Vue.component('categories-component', CategoriesComponent);
}


export {
  setupComponents
}
