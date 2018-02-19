<template>
    <div>
      <VHeader>首页</VHeader>
      <div class="content">
        <Swiper :swiperSlides="sliders"></Swiper>
        <div class="container">
          <h3>热门图书</h3>
          <ul>
            <li v-for="hot in hotBooks">
              <img :src="hot.bookCover" alt="">
              <b>{{hot.bookName}}</b>
            </li>
          </ul>
        </div>
      </div>
            d
    </div>
</template>
<script>
    import VHeader from '../base/VHeader.vue';
    import Swiper from '../base/Swiper.vue';
    import {getSliders,getHotBook} from "../api";

    export default {
        created(){
          this.getSlider();
          this.getHot();
        },
        data() {
            return {sliders:[],hotBooks:[]}
        },
        computed: {},
        methods: {
          async getHot(){
            this.hotBooks=await getHotBook();
          },
          async getSlider(){
            this.sliders=await getSliders();
          }
        },
        components: {VHeader,Swiper}
    }
</script>
<style scoped lang="less">
  h3{
    color:#999;
    padding:5px 0;
  }
  .container{
    width:90%;
    margin:0 auto;
    ul{
      display:flex;
      flex-wrap:wrap;
      padding-bottom:10px;
      li{
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        width:50%;
        text-align:center;
        margin:5px 0;
        img{width:100%}
        margin:3px 0;
        border:1px solid black;
      }
    }
  }
</style>
