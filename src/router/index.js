import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Home from '../components/Home.vue';
import Collect from '../components/Collect.vue';
import List from '../components/List.vue';
import Detail from '../components/Detail.vue';
import Add from '../components/Add.vue';
export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/add',component:Add},
    {path:'/detail',component:Detail},
    {path:'/list',component:List},
    {path:'/collect',component:Collect},
    {path:'*',redirect:'/home'},
  ]
})
