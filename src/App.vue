<template>
  <div id="app">
    <transition name="fadeIn">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>

    <!--不需要缓存的-->
    <transition name="fadeIn">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <Tab></Tab>

  </div>
</template>

<script>
import Tab from './base/Tab.vue';
export default {
  name: 'App',
  components:{
    Tab
  }
}
</script>

<style>
*{padding:0;margin:0}
ul,li{list-style:none}
a{text-decoration:none}
input,button{
  -webkit-appearance:none;
}
.content{position:fixed;width:100%;top:40px;bottom:50px;
  overflow: auto;}
.fadeIn-enter{
  opacity:0;
}
.fadeIn-enter-active{
  transition: all 1s linear;
}
.fadeIn-leave-active{
  transition: all 1s linear;
  opacity:1;
}
</style>
