<template>
  <div>
    <!-- 顶部导航 -->
    <van-nav-bar>
      <template #right>
        <van-icon :name="isEditing ? 'success' : 'editor'" size="18" />
        <span style="margin-left: 3px" @click="isEditing = !isEditing">{{
          isEditing ? "完成" : "编辑"
        }}</span>
      </template>
    </van-nav-bar>
    <!-- 购物车商品列表 -->
    <van-checkbox-group v-model="checkerIds" @change="changeGroup">
      <van-swipe-cell
        v-for="item in infos.cartList"
        :key="item.id"
        :disabled="!isEditing"
      >
        <!-- 左半边复选框 -->
        <van-checkbox class="cb" :name="item.id"></van-checkbox>
        <!-- 右半边商品卡片 -->
        <van-card
          :num="item.number"
          :price="item.price | formatPrice"
          :title="item.goodsName"
          class="goods-card"
          :thumb="item.picUrl"
        >
          <template #tags>
            <van-tag
              plain
              type="danger"
              v-for="i in item.specifications"
              :key="i"
              >{{ i }}</van-tag
            >
          </template>
          <template #footer>
            <span v-if="!isEditing">添加日期 {{ item.addTime }}</span>
            <!-- 临时把单向数据修改为双向数据绑定 :value="item.number" => v-model="item.number" -->
            <van-stepper
              v-else
              input-width="25px"
              button-size="16px"
              v-model="item.number"
              disable-input
              @change="changeStepper(item)"
            />
          </template>
        </van-card>
        <template #right>
          <van-button
            square
            text="删除"
            type="danger"
            style="height: 100%"
            @click="handleDel(item.id)"
          />
        </template>
      </van-swipe-cell>
    </van-checkbox-group>
    <h3 v-show="infos.cartList.length == 0">购物车空空如也</h3>
    <!-- 底部结算栏 -->
    <van-submit-bar
      :price="totalPrice"
      :button-text="isEditing ? '删除' : '结算'"
      class="container"
      :disabled="infos.cartList.length == 0"
      @submit="onSubmit"
    >
      <van-checkbox v-model="isAll" :disabled="infos.cartList.length == 0">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import { getCartDataAPI } from "@/api/api";
export default {
  data() {
    return {
      isEditing: false, //是否处于编辑状态
      checkerIds: [],
      infos: {
        cartList: [], //购物车列表
        cartTotal: {
          goodsCount: 0, //商品总数量
          checkedGoodsCount: 0, //已勾选商品数量
          goodsAmount: 0, //商品总价
          checkedGoodsAmount: 0, //已勾选商品总价
        },
      },
    };
  },
  created() {
    this.init();
  },
  methods: {
    onSubmit(){
      if(this.isEditing){
        let delArr=[]
        this.infos.cartList.forEach((item) => {
          if (this.checkerIds.includes(item.id)) {
            delArr.push(item.productId)
          }
        });
        let obj={
          productIds:delArr
        }
        console.log(obj);
      // 重新读取购物车数据
      // this.init();
      }
   
       
      
    },
    // 滑动删除商品
    handleDel(goods) {
      let obj = {
        productIds: [goods.productId],
      };
      console.log(obj);
    },
    async init() {
      // 读后端数据初始化页面代码
      const { data: res } = await getCartDataAPI();
      console.log(res.data);
      this.infos = res.data;
      this.initCheckboxes();
    },
    initCheckboxes() {
      this.infos.cartList.forEach((item) => {
        if (item.checked) {
          this.checkerIds.push(item.id);
        }
      });
    },
    changeStepper(goods) {
      // 修改步进器
      let obj = {
        id: goods.id,
        number: goods.number,
        goodsId: goods.goodsId,
        productId: goods.productId,
      };
      console.log(obj); // 提交数据请求
      // 重新读取购物车数据
      // this.init();
    },
    // 监听复选框组改变
    changeGroup(value) {
      console.log(value);
      let ids = [];
      this.infos.cartList.forEach((el) => {
        if (value.includes(el.id)) {
          ids.push(el.productId);
        }
      });
      let obj = {
        productId: ids,
        isChecked: 1,
      };
      console.log(obj);
    },
  },
  computed: {
    // 计算总价totalPrice
    totalPrice() {
      return (
        this.infos.cartList.reduce((pre, cur) => {
          if (this.checkerIds.includes(cur.id)) {
            pre += parseInt(cur.number) * parseFloat(cur.price);
          }
          return pre;
        }, 0) * 100
      );
    },
    // totalPrice() {
    //   let sum = 0;
    //   this.infos.cartList.forEach((item) => {
    //     if (this.checkerIds.includes(item.id)) {
    //       sum += parseInt(item.number) * parseFloat(item.price);
    //     }
    //   });
    //   return sum * 100;
    // },
    // 全选isAll

    isAll: {
      get() {
        return this.checkerIds.length === this.infos.cartList.length;
      },
      set(value) {
        if (value) {
          this.checkerIds = [];
          this.infos.cartList.forEach((item) => {
            this.checkerIds.push(item.id);
          });
        } else {
          this.checkerIds = [];
        }
      },
    },

    // isAll: {
    //   get() {
    //     return this.checkerIds.length === this.infos.cartList.length;
    //   },
    //   set(val) {
    //     if (!val) {
    //       this.checkerIds = [];
    //     } else {
    //       this.checkerIds = [];
    //       this.infos.cartList.forEach((item) => {
    //         this.checkerIds.push(item.id);
    //       });
    //     }
    //   },
    // },
  },
};
</script>

<style scoped>
.van-submit-bar {
  bottom: 50px;
}

.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}

::v-deep .van-swipe-cell__wrapper {
  display: flex;
}

.van-card {
  width: 100%;
}

.cb {
  width: 23px;
  margin-left: 8px;
}

.van-tag--danger.van-tag--plain {
  color: #a3a4a6;
}

.van-card__footer {
  color: #a3a4a6;
}
</style>