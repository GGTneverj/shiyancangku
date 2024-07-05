//简单封装

//导入axios
import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:8080/wx/", //请求的域名地址
  timeout: 3000, //请求超时时间
});
// 用拦截器统一发送请求头
// request.interceptors.request.use(config=> {
//   // 在发送请求之前做些什么
//   if(getToken()!==null){
//     config.headers['X-litemall-token']=getToken()
//   }
// },
// error=> {
// return Promise.reject(error)

// })
//向外导出这个对象  request
export default request;
