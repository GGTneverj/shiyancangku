<template>
<!-- 包含返回功能的状态栏 -->
  <div>
    <van-nav-bar
      title="商品详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <p>商品的id是={{ $route.query.id }}</p>
  </div>
</template>

<script>
export default {
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