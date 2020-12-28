<template>
  <div>
    <van-nav-bar
      title="地址"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
  import Vue from "vue";
  import { AddressList, NavBar } from "vant";

  Vue.use(AddressList);
  Vue.use(NavBar);
  export default {
    data() {
      return {
        chosenAddressId: "1",
        list: [],
        disabledList: [
          {
            id: "3",
            name: "王五",
            tel: "13333333333",
            address: "浙江省杭州市滨江区江南大道 15 号",
          },
        ],
      };
    },
    methods: {
      onAdd() {
        this.$router.push("/addAddress");
      },
      onEdit(item, index) {
        console.log(index);
      },
      onClickLeft() {
        // Toast("返回");
        this.$router.push("/center");
      },
    },
    created() {
      console.log(123);
      this.$http.get("/api/info").then((ret) => {
        if (ret.code == 0) {
          this.list = JSON.parse(localStorage.getItem(ret.userinfo.mobile + ':address'));
          console.log(this.list);
        } else {
          Toast(ret.msg);
          this.$router.push("/user/login");
        }
      });
    },
    mounted() {
      console.log(123);
    },
  };
</script>
