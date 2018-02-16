import axios from 'axios';
//设置默认请求的路径
axios.defaults.baseURL='http://localhost:3000';
//获取轮播图数据
export let getSliders=()=>{
  return axios.get('/sliders')
}
