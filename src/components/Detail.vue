<template>
    <div class="detail">
      <VHeader :back="true">详情页</VHeader>
      <ul>
        <li>
          <label>
            <input type="text"v-model="book.bookName">
            书的名称
          </label>
          <label>
            <input type="text"v-model="book.bookInfo">
            书的信息
          </label>
          <label>
            <input type="text"v-model.number="book.bookPrice">
            书的价格
          </label>
        </li>
        <li>
          <button @click="update" class="btn btn-danger">确认修改</button>
        </li>
      </ul>
    </div>
</template>
<script>
    import VHeader from '../base/VHeader.vue';
    import {findOneBook,updateBook} from "../api";
    export default {
        created(){
          this.getData();
        },
        data() {
            return {book:{}}
        },
        watch:{
          $route(){   //路径变化重新获取数据
            this.getData();
          }
        },
        computed: {
          bid(){
            return this.$route.params.bid;
          }
        },
        methods: {
          async update(){
            console.log(this.book)
            await updateBook(this.bid,this.book);
            this.$router.push('/list')
          },
          async getData(){
            this.book=await findOneBook(this.bid);
            if(!Object.keys(this.book).length){
              this.$router.push('/list');
            }
            console.log(Object.keys(this.book))
          }
        },
        components: {VHeader}
    }
</script>
<style scoped>
ul{
  margin-top:40px;
}
.detail{
  position:absolute;
  height:100%;
  top:0;
  left:0;
  bottom:0;
  right:0;
  background:white;
  z-index:26;
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
  display:block;
}
.btn-danger {
  color: #fff;
  background-color: #d9534f;
  border-color: #d43f3a;
}
</style>
