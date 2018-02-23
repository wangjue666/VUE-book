let http=require('http');
let fs=require('fs');
let url=require('url');

function read(cb) {
  fs.readFile('./book.json','utf8',function(err,data){
    if(err||data.length==0){
      cb([])
    }else{
      cb(JSON.parse(data))
    }
  })
}
function write(data,cb){
  fs.writeFile('./book.json',JSON.stringify(data),cb)
}
//获取轮播图
let sliders=require('./sliders.js');
http.createServer((req,res)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods","*");
  res.setHeader("X-Powered-By",' 3.2.1')
  if(req.method=='OPTIONS') return res.end();


  let {pathname,query}=url.parse(req.url,true);//true把query转换成对象
  console.log({pathname,query})
  if(pathname=='/sliders'){
    console.log('s')
    res.setHeader('Content-Type','application/json;charser=utf8')
    return res.end(JSON.stringify(sliders));
  }
  if(pathname=="/hot"){
    read(function(books){
      let hot=books.reverse().slice(0,4);
      res.setHeader('Content-Type','application/json;charser=utf8');
      res.end(JSON.stringify(hot))
    });
    return
  }
  if(pathname==="/book"){ //对书的增删改查'
    let id=parseInt(query.id);
    switch (req.method){
      case 'GET':
        if(!isNaN(id)){
          read(function(books){
            let book=books.find(item=>item.bookId===id);
            if(!book) book={};
            res.setHeader('Content-Type','application/json;charser=utf8');
            res.end(JSON.stringify(book));
          })
        }else{ //获取所有图书
          read(function(books){
            res.setHeader('Content-Type','application/json;charser=utf8');
            res.end(JSON.stringify(books.reverse()))
          })
        }
        break;
      case 'POST':
        let str='';
        req.on('data',chunk=>{
          str+=chunk;
        });
        req.on('end',()=>{
          let book=JSON.parse(str);
          read(function(books){
            book.bookId=books.length?books.length:1;
            books.push(book);
            write(books,function(){
              res.end(JSON.stringify(book))
            })
          })
        })
        break;
      case 'PUT':
        if(id){
          let str='';
          req.on('data',chunk=>{
            str+=chunk;
          })
          req.on('end',()=>{
            let book=JSON.parse(str);
            read(function(books){
              books=books.map(item=>{
                if(item.bookId===id){
                  return book;
                }
                return item;
              });
              write(books,function(){
                res.end(JSON.stringify(book))
              })
            })
          })
        }
        break;
      case 'DELETE':
        read(function(books){
          books=books.filter(item=>item.bookId!==id);
          write(books,function(){
            console.log(books);
            res.end(JSON.stringify([])); //删除返回空对象
          })
        })
        break;
    }
    return
  }
}).listen(3000)
