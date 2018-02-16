<template>
    <div class="footer">
      <router-link to="/home">
        <i class="iconfont">&#xe60a;</i>
        <span>首页</span>
      </router-link>
      <router-link to="/list">
        <i class="iconfont">&#xe632;</i>
        <span>列表</span>
      </router-link>
      <router-link to="/collect">
        <i class="iconfont">&#xe60b;</i>
        <span>收藏</span>
      </router-link>
      <router-link to="/add">
        <i class="iconfont">&#xe68f;</i>
        <span>添加</span>
      </router-link>
    </div>
</template>

<style scoped lang="less">
  .footer{
    position:fixed;
    left:0;
    bottom:0;
    width:100%;
    height:50px;
    display:flex;
    border-top:1px solid #ccc;
    a{
      display:flex;
      color:black;
      flex-direction:column;
      flex:1;
      align-items: center;
      justify-content: center;
    }
    a.router-link-active{
      color:#1909ef;
    }
  }
</style>
