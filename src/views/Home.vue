<template>
  <div class="container">
    <!-- 导航栏 -->
    <Searchbar></Searchbar>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in infos.banner" :key="index">
        <img :src="item.url" alt="" style="width: 100%" />
      </van-swipe-item>
    </van-swipe>

    <!-- 分类导航 -->
    <van-grid :column-num="6">
      <van-grid-item
        v-for="item in infos.channel"
        :key="item.id"
        :icon="item.iconUrl"
        :text="item.name"
      />
    </van-grid>

    <!-- 团购导航 -->
    <van-cell title="团购商品区" is-link to="#" value="更多团购商品" />
    <!-- 团购专区 -->
    <van-card
      v-for="item in infos.grouponList"
      :key="item.id"
      :price="item.grouponPrice | formatPrice"
      :desc="item.brief"
      :title="item.name"
      :thumb="item.picUrl"
      :origin-price="item.retailPrice | formatPrice"
      @click="handleClick(item.id)"
    >
      <!-- #tags 表示使用了tags 插槽  #=>v-slot -->
      <template #tags>
        <van-tag plain type="primary">{{ item.grouponMember }}人成团</van-tag>
        <van-tag plain type="danger">{{ item.grouponDiscount }}元满减</van-tag>
      </template>
    </van-card>

    <!-- 品牌商 -->
    <van-cell title="品牌直供商" is-link to="#" value="更多品牌商" />
    <van-row>
      <van-col span="12" v-for="(item, index) in infos.brandList" :key="index">
        <div class="brand-box">
          <img :src="item.picUrl" alt="" style="width: 90%" />
          <span>{{ item.name }}</span>
        </div>
      </van-col>
    </van-row>
    <!-- 新品首发 -->
    <van-cell title="新品首发" is-link to="#" value="更多新品首发" />
    <van-row>
      <van-col
        span="12"
        v-for="(item, index) in infos.newGoodsList"
        :key="index"
      >
        <div class="brand-box">
          <img :src="item.picUrl" alt="" style="width: 90%" />
          <span>{{ item.name }}</span>
          <span>￥ {{ item.retailPrice }}</span>
        </div>
      </van-col>
    </van-row>
    <!-- 人气推荐 -->
    <van-cell title="人气推荐" is-link to="#" value="更多人气推荐" />
    <!-- 人气推荐 -->
    <van-card
      v-for="item in infos.hotGoodsList"
      :key="item.id"
      :price="item.retailPrice | formatPrice"
      :desc="item.brief"
      :title="item.name"
      :thumb="item.picUrl"
      :origin-price="item.counterPrice | formatPrice"
      @click="handleClick(item.id)"
    >
    </van-card>
    <!-- 专题精选 -->
    <van-cell title="专题精选" is-link to="#" value="更多专题精选" />
    <van-row>
      <van-col span="12" v-for="(item, index) in infos.topicList" :key="index">
        <div class="brand-box">
          <img :src="item.picUrl" alt="" style="width: 90%" />
          <span>{{ item.title }}</span>
          <span>{{ item.subtitle }}</span>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { getHomeDataAPI } from "@/api/api.js";
import Searchbar from "@/components/Searchbar.vue";

export default {
  data() {
    return {
      infos: {},
      ipt: "",
    };
  },
  async created() {
    //最早在这里发请求拿数据
    //getHomeDataAPI 返回 Promise 对象 1.then 2.catch
    const { data: res } = await getHomeDataAPI();
    console.log(res.data);
    this.infos = res.data;
  },
  methods: {
    //穿个参数id
    //跳转到详情页（）
    handleClick(id) {
      // 动态路由
      // this.$route.push({
      //   path: `/detail/${id}`,
      // });
      // 查询参数传参
      this.$router.push({
        path: "/detail",
        query: {
          id,
        },
      });
    },

  },
};
</script>

<style scoped>
.container {
  padding-bottom: 50px;
}
::v-deep .van-cell__value {
  font-size: 12px;
}
.brand-box {
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.brand-box span {
  font-size: 12px;
  margin-top: 5px;
}
</style>
