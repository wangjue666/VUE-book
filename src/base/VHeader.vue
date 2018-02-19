<template>
    <div class="header">
      <slot></slot>
      <i class="iconfont" v-if="back" @click="goBack">&#xe60c;</i>
    </div>
</template>
<script>
    export default {
        props:{
          back:{
            type:Boolean,
            default:false
          }
        },
        methods:{
          goBack(){
            this.$router.go(-1);
          }
        }
    }
</script>
<style scoped lang="less">
  .header{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    background:mediumblue;
    height:40px;
    text-align:center;
    line-height:40px;
    color:white;
    font-weight:bold;
    i{
      position:absolute;
      left:10px;
      font-size:20px;
    }
  }
</style>
