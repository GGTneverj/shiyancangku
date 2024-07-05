<template>
  <div>
    <!-- 基础语法 -->
    <!-- <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/user">我的</van-tabbar-item>
    </van-tabbar> -->
    <!-- 调用 -->
    <van-tabbar
      route
      v-model="active"
      active-color="#ee0a24"
      inactive-color="#000"
    >
      <van-tabbar-item
        v-for="(item, index) in taber"
        :key="index"
        :icon="item.icon"
        :to="item.path"
        active-color="ee0a24"
      >
        {{ item.name }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      taber: [
        {
          name: "首页",
          icon: "compass-full",
          path: "/",
        },
        {
          name: "分类",
          icon: "class-full",
          path: "/category",
        },
        {
          name: "购物车",
          icon: "cart-full",
          path: "/cart",
        },
        {
          name: "我的",
          icon: "wode",
          path: "/user",
        },
      ],
    };
  },
};
</script>

<style>
</style>