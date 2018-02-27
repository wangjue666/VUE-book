<template>
  <div>
    <VHeader>购物车</VHeader>
    <ul class="content">
      <li v-for="l in cartList">
        <img :src="l.bookCover" alt="">
        <h3>{{l.bookName}}</h3>
        <button class="btn btn-primary">-</button>{{l.bookCount}}}<button class="btn btn-primary">+</button>
        <button class="btn btn-primary">删除</button>
        <p>小计{{l.bookPrice*l.bookCount}}</p>
      </li>
      <li>共{{count}}本</li>
    </ul>
  </div>

</template>
<script>
    import {mapState,mapGetters} from 'vuex';
    import VHeader from '../base/VHeader.vue';
    export default{
        data() {
            return {}
        },
        computed: {
          ...mapGetters(['count']),
          ...mapState(['cartList'])
        },
        methods: {},
        components: {VHeader}
    }
</script>
<style scoped>
  .btn-primary {
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
  }
  .btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
  }
</style>
