<template>
    <div>
      <VHeader>首页</VHeader>
      <div class="content">
        <Swiper :swiperSlides="sliders"></Swiper>
      </div>

    </div>
</template>
<script>
    import VHeader from '../base/VHeader.vue';
    import Swiper from '../base/Swiper.vue';
    import {getSliders} from "../api";

    export default {
        async created(){
          let {data:sliders}=await getSliders();
          this.sliders=sliders;
        },
        data() {
            return {sliders:[]}
        },
        computed: {},
        methods: {},
        components: {VHeader,Swiper}
    }
</script>
<style scoped>

</style>
