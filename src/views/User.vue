<template>
  <div class="main">
    <div class="container">
      <!-- 齿轮图标 -->
      <van-icon name="set" size="30px" color="white" class="set" />
      <!-- 头像 -->
      <van-image
        round
        width="70px"
        height="70px"
        src="https://ts2.cn.mm.bing.net/th?id=OIP-C.1jz69VebvpbUkThZsSWVfQAAAA&w=119&h=104&c=7&bgcl=1a37a2&r=0&o=6&dpr=1.5&pid=13.1"
        class="centered-item"
      />
      <span class="centered-item">2232121313</span>
    </div>

    <van-cell
      title="我的订单"
      is-link
      value="全部订单"
      style="margin-top: 10px"
    />
    <van-grid icon-size="22px">
      <van-grid-item icon="daifukuan" text="待付款" />
      <van-grid-item icon="daifahuo" text="待发货" />
      <van-grid-item icon="wuliu" text="待收货" />
      <van-grid-item icon="shouhouguanli" text="已完成" />
    </van-grid>

    <van-cell
      title="我的优惠券"
      is-link
      value="全部优惠券"
      style="margin-top: 10px"
    />
    <van-grid column-num="3" icon-size="22px">
      <van-grid-item icon="coupon" text="待使用" />
      <van-grid-item icon="coupon-used" text="已使用" />
      <van-grid-item icon="coupon-due" text="过期关闭" />
    </van-grid>

    <van-cell
      title="我的收藏"
      icon="shoucang"
      style="margin-top: 10px"
      is-link
    ></van-cell>
    <van-cell title="收货地址" icon="dingwei" is-link></van-cell>
    <van-cell title="服务中心" icon="kefu" is-link></van-cell>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* 垂直居中 */
  justify-content: center;
  /* 水平居中 */
  height: 200px;
  /* 或者你需要的任意高度 */
  background-color: #fc4242;
}
.set {
  position: absolute;
  top: 10px;
  right: 10px;
}
.centered-item {
  margin-bottom: 10px;
  color: white;
}

.font-icon {
  position: absolute;
  /* 绝对定位 */
  top: 15px;
  /* 距离容器顶部的距离 */
  right: 15px;
  /* 距离容器右边的距离 */
  font-size: 20px;
  /* 图标大小 */
}
.main {
  background-color: #f2f2f2;
  height: 100vh;
}
</style>