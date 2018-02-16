let http=require('http');
let fs=require('fs');
let url=require('url');

//获取轮播图
let sliders=require('./sliders.js')
http.createServer((req,res)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By",' 3.2.1')
  if(req.method=='OPTIONS') return res.end();


  let {pathname,query}=url.parse(req.url);
  console.log({pathname,query})
  if(pathname=='/sliders'){
    console.log('s')
    res.setHeader('Content-Type','application/json;charser=utf8')
    res.end(JSON.stringify(sliders));

  }
}).listen(3000)
