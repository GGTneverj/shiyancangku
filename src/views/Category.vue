<template>
  <div>
    <!-- 头部搜索框 -->
    <Searchbar></Searchbar>
    <div>
      <!-- 左侧侧边栏  一级分类 -->
      <van-sidebar v-model="activeKey" class="fl" @change="onChange">
        <van-sidebar-item
          v-for="(item, index) in infos.categoryList"
          :key="index"
          :title="item.name"
        />
      </van-sidebar>
      <div class="right-box">
        <!-- 右侧侧侧边栏  二级分类 -->
        <img :src="infos.currentCategory.picUrl" alt="" />
        <!-- 一级分类的描述信息 -->
        <h6>{{ infos.currentCategory.desc }}</h6>
        <!-- 二级分类 -->
        <van-grid :column-num="3">
          <van-grid-item
            v-for="(item, index) in infos.currentSubCategory"
            :key="index"
          >
            <img :src="item.picUrl" alt="" style="width: 70%" />
            <span>{{ item.name }}</span>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
import { getCatDataAPI, getSubCategoryAPI } from "@/api/api.js";
export default {
  data() {
    return {
      infos: {
        categoryList: [],
        currentCategory: {}, //一级分类信息
        currentSubCategory: [], //二级分类信息
      },
      activeKey: 0,
    };
  },
  async created() {
    //可以在最早的生命周期 created 在这里发请求拿数据
    //getHomeDataAPI 返回 Promise 对象 1.then 2.catch
    const { data: res } = await getCatDataAPI();
    console.log(res.data);
    this.infos = res.data;
  },
  methods: {
    //监听侧边栏的点击事件，可以得到点击的索引
    async onChange(index) {
      console.log("出发" + index);
      console.log("频道id" + this.infos.categoryList[index].id);
      const cid = this.infos.categoryList[index].id;
      const { data: res } = await getSubCategoryAPI(cid);
      console.log(res.data);
      this.infos.currentCategory = res.data.currentCategory; //将获取的二级分类覆盖原来的分类
      this.infos.currentSubCategory = res.data.currentSubCategory; //将获取的二级分类覆盖原来的分类
    },
  },
};
</script>

<style>
.right-box > img {
  width: 250px;
}

.right-box {
  text-align: center;
}
.right-box h6 {
  padding-top: 13px;
  padding-bottom: 13px;
}
.right-box span {
  font-size: 12px;
}
</style>