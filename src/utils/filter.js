// 存放所有的全局过滤器


// 格式化价格为两位小数
export function formatPrice(price){
  const num =parseInt(price)//尝试转数值类型
  if(isNaN(num)){
    return 
  }else{
    return num.toFixed(2)
  }
}