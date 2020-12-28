<template>
  <div>
    <van-nav-bar
      title="登录/注册"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-tabs v-model="active" @click="onClick">
      <van-tab title="手机号登录"></van-tab>
      <van-tab title="手机号注册"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import Vue from "vue";
  import { Tab, Tabs, NavBar } from "vant";

  Vue.use(Tab);
  Vue.use(Tabs);
  Vue.use(NavBar);
  export default {
    data() {
      return {
        active: 0,
        url: ["/user/login", "/user/register"],
      };
    },
    methods: {
      onClick(val) {
        this.$router.push(this.url[this.active]);
      },
      onClickLeft() {
        this.$router.push('/center');
      }
    },
    created() {
      this.active = this.url.indexOf(this.$route.path);
    },
    watch: {
      $route: function(val) {
        // console.log(val);
        this.active = this.url.indexOf(val.path);
      },
    },
  };
</script>
