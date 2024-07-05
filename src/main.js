import Vue from 'vue'
import App from './App.vue'
import router from './router'
//导入vant组件库
import Vant from 'vant'
import { Button, Tabbar, TabbarItem,Search} from 'vant';
import 'vant/lib/index.css';
// 导入iconfont
import '../src/assets/iconfont/iconfont.css'
//导入mock模块
import '@/utils/mock.js'

// 全局注册 Searchbar
import Searchbar from '@/components/Searchbar.vue'
Vue.component('Searchbar',Searchbar)

// 注册全局的过滤器
// Vue.filter("过滤器的名字","过滤器的处理函数")
// Vue.filter('formatPrice',function(price){
//   // 过滤器的处理函数
//   //形参 price 可以渠道管道符 | 前面的需要格式化
//   const num =parseInt(price)//尝试转数值类型
//   if(isNaN(num)){
//     return 
//   }else{
//     return num.toFixed(2)
//   }
//   })

import * as filters from "@/utils/filter"
console.log(filters);
// 把这个对象所有的键抽取出来组成一个数组
// 批量制作

Object.keys(filters).forEach(el =>{
  Vue.filter(el,filters[el])
})


Vue.use(Vant).use(Button).use(Tabbar).use(TabbarItem).use(Search);

Vue.config.productionTip = false


//导入 animate.css动画库
import 'animate.css'


//导入全局的样式文件
import '@/assets/reset.css'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

