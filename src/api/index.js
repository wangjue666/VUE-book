import axios from 'axios';
//设置默认请求的路径
axios.defaults.baseURL='http://localhost:3000';
axios.interceptors.response.use((res)=>{
  return res.data;
})
//获取轮播图数据
export let getSliders=()=>{
  return axios.get('/sliders')
}
//获取热门图书接口
export let getHotBook=()=>{
  return axios.get('/hot')
}
//获取全部图书
export let getBooks=()=>{
  return axios.get('/book')
}
//删除某一本图书
export let removeBook=(id)=>{  //删除某一项
  return axios.delete(`/book?id=${id}`)
}
//获取某一本书
export let findOneBook=(id)=>{
  return axios.get(`/book?id=${id}`);
}
//修改图书
export let updateBook=(id,data)=>{
  return axios.put(`/book?id=${id}`,data)
}
//添加图书
export let addBook=(data)=>{
  return axios.post('/book',data);
}
