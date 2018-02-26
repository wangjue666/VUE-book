// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//导入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
//使用轮播图插件
Vue.use(VueAwesomeSwiper);
import 'swiper/dist/css/swiper.css';
Vue.config.productionTip = false
//图片懒加载插件
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://img5.cyzone.cn/uploadfile/2014/0114/20140114042104280.jpg',
  loading: 'http://www.wzsky.net/img2015/uploadimg/20151112/1000081.gif',
  attempt: 1
})
//在进入路由之前，每一次都会执行此方法,全局钩子
router.beforeEach(function(to,from,next){
  document.title=to.meta.title;
  next();
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
