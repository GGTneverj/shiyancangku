//该模块提供 token 的读写方法

const tokenName='token'

//读取 token
export function getToken(){
 return  window.sessionStorage.getItem(tokenName)
}

//写入 token
export function setToken(val){
  window.sessionStorage.setItem(tokenName,val)
}