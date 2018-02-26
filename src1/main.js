import Vue from 'vue';
import Vuex from 'vuex';
import App from './app.vue';
Vue.use(Vuex);

new Vue({
  el:'#app',
  ...App
})
