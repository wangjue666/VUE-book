<template>
    <div>
      <VHeader>列表页</VHeader>
      <div class="content">
        <ul>
          <li v-for="book in books">
            <img :src="book.bookCover" alt="">
            <div>
              <h4>{{book.bookName}}</h4>
              <p>{{book.bookInfo}}</p>
              <b>{{book.bookPrice}}</b>
              <button @click="remove(book.bookId)" class="btn btn-primary">删除</button>
            </div>

          </li>
        </ul>
      </div>
    </div>
</template>
<script>
import {getBooks,removeBook} from "../api";
import VHeader from '../base/VHeader.vue';
    export default {
        created(){
          this.getData();
        },
        data() {
            return {books:[]}
        },
        computed: {},
        methods: {
          async getData(){
              this.books=await getBooks();
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
    display:block;
  }
</style>
