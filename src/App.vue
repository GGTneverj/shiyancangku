<template>
  <div id="app">
    <!-- 路由切换组件容器 -->
    <!-- enter-active-class 指定组件进入时的动画效果 -->
    <!-- mode="out-in" 表示切换时先出后进 -->
    <transition enter-active-class="animate__bounceInRight" mode="out-in">
      <!-- class="animate__animated"  -->
      <router-view></router-view>
    </transition>

    <!-- 底部导航 -->
    <Tabbar v-if="$route.meta.show"></Tabbar>
  </div>
</template>

<script>
import Tabbar from "./components/Tabbar.vue";

export default {
  components: { Tabbar },
};
</script>

<style>
</style>