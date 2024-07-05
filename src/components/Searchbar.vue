<template>
  <div>
    <!-- 头部搜索框 -->
    <!-- <van-search placeholder="点击前往搜索" @click="$router.push('/search')"  @focus="handleClick"/> -->
    <van-search placeholder="假的搜索" @focus="handleClick"/>
  </div>
</template>

<script>
export default {
  methods:{
    handleClick(){
    this.$router.push('/search')
    }
  }
};
</script>

<style>
</style>