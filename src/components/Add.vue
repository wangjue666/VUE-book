<template>
    <div>
      <VHeader></VHeader>
      <div class="content">
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
            <label>
              <input type="text"v-model="book.bookCover">
              书的封面
            </label>
          </li>
          <li>
            <button @click="add" class="btn btn-danger">添加</button>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
  import VHeader from '../base/VHeader.vue';
  import {addBook} from "../api";

  export default{
        data() {
            return {book:{}}
        },
        computed: {},
        methods: {
          async add(){
           await addBook(this.book);
           this.$router.push('/list');
          }
        },
        components: {VHeader}
    }
</script>
<style scoped>
  ul{
    margin-top:40px;
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
