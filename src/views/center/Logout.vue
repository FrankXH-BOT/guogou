<template>
  <div>
    <van-nav-bar
      title="设置"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-cell-group>
      <van-cell :title="list" value="退出登录" @click="logout" />
    </van-cell-group>
  </div>
</template>

<script>
  import Vue from "vue";
  import { Cell, CellGroup } from "vant";
  import { Notify, NavBar } from "vant";

  Vue.use(Cell);
  Vue.use(CellGroup);
  Vue.use(NavBar);
  export default {
    data() {
      return {
        list: "",
      };
    },
    created() {
      this.$store.commit("isShowFooterNav", false);
      let x = localStorage.getItem("jwt");
      if (!x) {
        return;
      } else {
        this.$http.get("/api/info").then((ret) => {
          if (ret.code === 0) {
            this.list = ret.userinfo.mobile;
          }
        });
      }
    },
    beforeDestroy() {
      this.$store.commit("isShowFooterNav", true);
    },
    methods: {
      logout() {
        localStorage.setItem("jwt", "");
        Notify("您已退出登录,两秒后回到首页");
        setTimeout(() => {
          this.$router.push("/");
        }, 2000);
      },
      onClickLeft() {
        this.$router.push("/center");
      },
    },
  };
</script>
