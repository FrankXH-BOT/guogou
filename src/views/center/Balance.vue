<template>
  <div>
    <div>
      <van-nav-bar
        title="当前可用余额"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="zt">
      <strong>￥1000000000000000000000000</strong>
    </div>
    <div class="text">
      如需充值请联系10086说我要充值
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      onClickLeft() {
        this.$router.push("/center");
      },
    },
    created() {
      this.$store.commit("isShowFooterNav", false);
    },
    // beforeDestroy() {
    //   this.$store.commit("isShowFooterNav", true);
    // },
  };
</script>
<style lang="scss" scope>
  .zt {
    text-align: center;
    margin-top: 50px;
    strong {
      color: red;
      font-size: 1.125rem;
    }
  }
  .text {
    font-size: 15px;
    text-align: center;
    color: red;
    margin-top: 100px;
  }
</style>
