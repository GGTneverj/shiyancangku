//这个文件用来定义所有的数据请求方法
import request from "@/utils/request.js";
//获取首页数据
export function getHomeDataAPI() {

 return request.get('/home/index')

}
  //获取分类页数据
export function getCatDataAPI() {

 return request.get('catalog/index')
}

//根据一级分类的id获取它的信息以及对应的二级信息

export function getSubCategoryAPI(id){
  return request.get('/catalog/current',{
    params:{
      id
    },
  })
}

//获取商品列表数据
export function getCartDataAPI(){
  return request.get('/cart/index'
  )
  
}

//登录
export function loginAPI(obj){
  return request({
    method:'post',
    url:'/auth/login',
    // post请求参数放在data中,get请求参数放在params中
    data:{
      username:obj.username,
      password:obj.password,
    }
  })
  
}

