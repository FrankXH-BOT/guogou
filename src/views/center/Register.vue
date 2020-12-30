<template>
  <div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="mobile"
        name="mobile"
        label="用户名"
        placeholder="用户名"
        :rules="[{ pattern, message: '请填写正确的手机号' }]"
        @blur="justify"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="confirmPassword"
        type="password"
        name="confirmPassword"
        label="确认密码"
        placeholder="确认密码"
        :rules="[{ required: true, message: '请确认密码' }]"
      />
      <div style="margin: 16px;">
        <van-button square block type="primary" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
  import Vue from "vue";
  import { Form, Field, Toast } from "vant";

  Vue.use(Form);
  Vue.use(Field);
  Vue.use(Toast);
  export default {
    data() {
      return {
        mobile: "",
        password: "",
        confirmPassword: "",
        pattern: /^1[3-9]\d{9}$/,
        code: 0,
      };
    },
    created() {
      this.$store.commit("isShowFooterNav", false);
    },
    methods: {
      justify() {
        if (this.pattern.test(this.mobile)) {
          this.$http
            .post("http://39.97.219.143:8888/api/v1/user/mobileisreg", { mobile: this.mobile })
            .then((ret) => {
              if (ret.code == 900) {
                Toast.fail(ret.msg);
                this.code = ret.code;
              } else {
                Toast.success(ret.msg);
                this.code = ret.code;
              }
            });
        }
      },
      onSubmit(values) {
        if (this.code === 0) {
          if (this.password === this.confirmPassword) {
            this.$http.post("http://39.97.219.143:8888/api/v1/user/register", values).then((ret) => {
              if (ret.code == 0) {
                this.$http.get("http://39.97.219.143:8888/api/v1/user/info").then((ret1) => {
                  Toast(ret.msg + ",2s后跳转登录页面！");
                  setTimeout(() => {
                    this.$router.push("/user/login");
                  }, 2000);
                });
              } else {
                Toast("注册失败，请稍后在试！");
              }
            });
          } else {
            Toast("两次账号输入不一致，请检查后提交！");
          }
        } else {
          Toast("该账号已被注册！");
        }
      },
    },
  };
</script>
