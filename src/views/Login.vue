<template>
  <div class="login">
    <div class="conmain">
      <van-image
        round
        width="80px"
        height="80px"
        src="https://ts2.cn.mm.bing.net/th?id=OIP-C.1jz69VebvpbUkThZsSWVfQAAAA&w=119&h=104&c=7&bgcl=1a37a2&r=0&o=6&dpr=1.5&pid=13.1"
        class="centered-item"
      />
      <span class="centered-item">高州成</span>
    </div>
    <van-cell-group>
      <van-field
        placeholder="请输入账号"
        v-model="username"
        label="用户名"
        left-icon="username"
      />
      <van-field
        placeholder="请输入密码"
        v-model="password"
        type="password"
        label="密码"
        left-icon="lock"
      />
    </van-cell-group>
    <!-- 两端对齐 -->
    <van-row type="flex" justify="space-between" class="zc">
      <van-col span="6">免费注册</van-col>
      <van-col span="6"></van-col>
      <van-col span="6">忘记密码</van-col>
    </van-row>
    <!-- 登录按钮(警告红) -->
    <van-button type="danger" size="large" @click="onSubmit">登录</van-button>
  </div>
</template>

<script>
import { setToken } from "@/utils/token.js";
import { loginAPI } from "@/api/api.js";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async onSubmit() {
      console.log("提交了账号密码");
      let obj = {
        username: this.username,
        password: this.password,
      };
      //点击登录按钮
      //发送请求携带用户名和密码
      const { data: res } = await loginAPI(obj);

      setToken(res.data.token);
      //登录成功跳转到首页 //登录成功后跳转到想去的页面
      // this.$router.push("/home");
      //登录成功后跳转到想去的页面
      // this.$router.push({ path: "/home" });
      //登录成功后跳转到想去的页面
      // this.$router.push({ path: "/home", query: { wantto: "home" } });
      //登录成功后跳转到想去的页面
      const dest = this.$route.query.wanttogo;
      this.$router.push(dest);
    },
  },
};
</script>

<style>
.login {
  width: 90%;
  margin: 0 auto;
}
.zc {
  height: 40px;
}
.conmain {
  position: relative;
  display: flex;
  flex-direction: column;
  /* 默认为 column，但如果需要它们水平排列，则更改为 row */
  align-items: center;
  /* 垂直居中 */
  justify-content: center;
  /* 水平居中 */
  height: 200px;
  /* 或者你需要的任意高度 */
}

.centered-item {
  /* 根据需要添加样式 */
  margin-bottom: 10px;

  /* 如果需要，为垂直排列的元素添加间距 */
}
.van-field {
  border: 1px #f2f2f2 black;
  border-radius: 10px;
  margin-bottom: 10px;
}
</style>