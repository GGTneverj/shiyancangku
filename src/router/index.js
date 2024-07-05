import Vue from "vue";
import VueRouter from "vue-router";
// 您的Vue Router全局前置守卫文件
import { getToken } from "@/utils/token.js";
//引入组件
import Home from "@/views/Home.vue";
import Category from "@/views/Category.vue";
import Cart from "@/views/Cart.vue";
import User from "@/views/User.vue";
import Detail from "@/views/Detail.vue";
import Search from "@/views/Search.vue";
import Login from "@/views/Login.vue";

Vue.use(VueRouter);
// 重写 VueRouter 的 push 方法，捕获错误信息
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location) {
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
  //用户定义
  //配置路由
  // 默认路由
  {
    path: "/",
    component: Home,
    meta: {
      //用户可以自己定义任意数量的参数
      show: true, //是否显示底部导航
      login: false, //是否显示登录按钮
    },
  },
  // home路由
  {
    path: "/home",
    component: Home,
    meta: {
      //用户可以自己定义任意数量的参数
      show: true, //是否显示底部导航
      login: false, //是否显示登录按钮
    },
  },
  // 分类路由
  {
    path: "/category",
    component: Category,
    meta: {
      // showTabber: true,
      show: true, //是否显示底部导航
      login: false, //是否显示登录按钮
    },
  },
  // 购物车路由
  {
    path: "/cart",
    component: Cart,
    meta: {
      show: true, //是否显示底部导航
      login: true, //是否显示登录按钮
    },
  },
  {
    path: "/user",
    component: User,
    meta: {
      show: true, //是否显示底部导航
      login: true, //是否显示登录按钮
    },
  },
  {
    // path: "/detail/:id?",//动态路由传参
    path:"/detail",
    component: Detail,
    meta: {
      show: true, //是否显示底部导航
      login: false, //是否显示登录按钮
    },
  },
  {
    path: "/search",
    component: Search,
    meta: {
      show: false, //是否显示底部导航
      login: false, //是否显示登录按钮
    },
  },
  {
    path: "/login",
    component: Login,
    meta: {
      show: false, //是否显示底部导航
      login: false, //是否显示登录按钮
    },
  },


];

const router = new VueRouter({
  routes,
});

//全局前置守卫(beforeEach:前置的导航首位)
router.beforeEach((to, from, next) => {
  //to是将要访问的路径，也就是要去哪里
  //from是代表从哪里来
  //next是一个函数，代表放行
  console.log(to);
  if (to.meta.login) {
    //判断需要登录为ture，就判断登录，放行。
    //如果还未登录
    // next("/login");
    if (getToken() === null) {
      next({
        path: "/login",
        query: {
          wanttogo: to.path, //强制跳转到想去的地方
        },
      });
    }
  }
  // 放行
  next();
});
export default router;
