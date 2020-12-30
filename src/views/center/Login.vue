<template>
  <div class="login">
    <van-form @submit="onSubmit">
      <van-field
        v-model="mobile"
        name="mobile"
        label="用户名"
        placeholder="用户名"
        :rules="[{ pattern, message: '请填写正确的手机号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button block square type="primary" native-type="submit"
          >登录</van-button
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
        pattern: /^1[3-9]\d{9}$/,
      };
    },
    created() {
      this.$store.commit("isShowFooterNav", false);
    },
    methods: {
      onSubmit(values) {
        this.$http.post("http://39.97.219.143:8888/api/v1/user/login", values).then((ret) => {
          if (ret.code == 0) {
            this.$store.commit("setJwt", ret.jwt);
            Toast(ret.msg + "2s后跳转");
            setTimeout(() => {
              if (this.$route.query.toUrl) {
                this.$router.push(this.$route.query.toUrl);
              } else {
                this.$router.push("/center");
              }
            }, 2000);
          } else {
            Toast.fail(ret.msg);
          }
        });
      },
    },
  };
</script>

<style lang="scss" scoped></style>
