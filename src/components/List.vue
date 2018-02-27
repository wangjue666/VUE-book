<template>
    <div>
      <VHeader>列表页</VHeader>
      <div class="content" ref="scroll" @scroll="loadMore">
        <ul>
          <router-link v-for="(book,index) in books" :to="{name:'detail',params:{bid:book.bookId}}" :key="index" tag="li">
            <img v-lazy="book.bookCover" alt="">
            <div>
              <h4>{{book.bookName}}</h4>
              <p>{{book.bookInfo}}</p>
              <b>{{book.bookPrice}}</b>
              <div class="btn-group">
                <button @click.stop="" class="btn btn-primary">添加</button>
                <button @click.stop="remove(book.bookId)" class="btn btn-primary">删除</button>
              </div>

            </div>
          </router-link>
        </ul>

      </div>
    </div>
</template>
<script>
import {pogination,removeBook} from "../api";
import VHeader from '../base/VHeader.vue';
    export default {
        created(){
          this.getData();
        },
        data() {
            return {books:[],offset:0,hasMore:true,isLoading:false}
        },
        mounted(){
          let mv=false;
          let scroll=this.$refs.scroll;
          let top=scroll.offsetTop;
          scroll.addEventListener('touchstart',(e)=>{
            if(scroll.scrollTop!=0&&scroll.offsetTop!=top) return;
            let start=e.touches[0].pageY;
            let distance=0;
            scroll.style.transition='none';
            console.log(scroll.scrollTop)
            let move=(e)=>{
              let current=e.touches[0].pageY;
              distance=current-start;
              if(distance>0){
                if(distance<=50&&scroll.scrollTop==0){
                  mv=true;
                  scroll.style.top=distance+top+'px';
                  scroll.addEventListener('touchend',end);
                }
              }else{
                scroll.removeEventListener('touchend',end);
                scroll.removeEventListener('touchmove',move);
              }};
            let end=(e)=>{
              if(!mv) return;
              scroll.style.transition='.4s';
              scroll.style.top=top+'px';
              this.books=[];
              this.hasMore=true;
              this.isLoading=false;
              this.offset=0;
              mv=false;
              this.getData();
            };
            scroll.addEventListener('touchmove',move);



          })
        },
        computed: {},
        methods: {
          loadMore(){
            clearTimeout(this.timer);
            this.timer=setTimeout(()=>{
              let {scrollTop,clientHeight,scrollHeight}=this.$refs.scroll;
              if(scrollTop+clientHeight+20>=scrollHeight){
                this.getData();
              }
            },13)

          },
          more(){
            this.getData();
          },
          async getData(){
             if(this.hasMore&&!this.isLoading){
               this.isLoading=true;
               let {hasMore,books}=await pogination(this.offset);
               this.books=[...this.books,...books];
               this.hasMore=hasMore;
               this.isLoading=false;
               this.offset=this.books.length;
             }

          },
          async remove(id){
            await removeBook(id);
            this.books=this.books.filter(item=>item.bookId!==id);
          },
        },
        components: {VHeader}
    }
</script>
<style scoped>
  .content ul{
    padding:10px;
    background:#CCC;
  }
  .content ul li{
    display:flex;
    margin-bottom:20px;
  }
  .content ul li div{
    margin-left:20px;
  }
  .content ul li h4{
    line-height:24px;
  }

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
  .btn-group{
    float:right;
    margin-top:10px;
  }
</style>
