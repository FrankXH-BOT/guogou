<template>
  <div>
    <van-tabs v-model="active" @click="onClick">
      <van-tab title="手机号登录"></van-tab>
      <van-tab title="手机号注册"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import Vue from "vue";
  import { Tab, Tabs } from "vant";

  Vue.use(Tab);
  Vue.use(Tabs);
  export default {
    data() {
      return {
        active: 0,
        url: ['/user/login', '/user/register']
      };
    },
    methods: {
      onClick(val) {
        this.$router.push(this.url[this.active]);
      },
    },
    created() {
        this.active = this.url.indexOf(this.$route.path);
    },
    watch: {
        $route: function(val){
            // console.log(val);
            this.active = this.url.indexOf(val.path);
        }
    }
  };
</script>
