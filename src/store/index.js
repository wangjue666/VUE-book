import Vue from 'vue';
import Vuex from 'vuex';
import logger from 'vuex/dist/logger';
Vue.use(Vuex);

//状态
let state={cartList:[]};
import getters from './getters';
import mutations from './mutations';
export default new Vuex.Store({
  state,
  strict:true,
  getters,
  mutations,
  plugins:[logger()]
})
