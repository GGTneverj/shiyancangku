<template>
  <!-- 需要开启动画的组件就加上类名 animate__animated-->
  <div class="animate__animated">
    <van-nav-bar
      title="搜索"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 头部搜索框 -->

    <van-search
      placeholder="请输入搜索内容"
      @search="goSearch"
      class="animate__animated"
    />
    <!-- @blur="$router.back()" -->
    <div style="padding: 15px" v-show="show">
      <h5>搜索的是:xxx</h5>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    //最早可以在这个生命周期的钩子函数中 修改 DOM 中 input 标签的样式
    //进入页面自动让输入框获得焦点
    document.querySelector("input").focus();
    //vue 中可以 ref 引用拿到 DOM 元素
  },
  methods: {
    goSearch() {
      //正真的发起请求
      this.show = true;
      document.querySelector("input").focus();
    },
  },
  setup() {
    const onClickLeft = () => history.back();
    return {
      onClickLeft,
    };
  },
};
</script>

<style>
</style>