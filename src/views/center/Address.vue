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
        chosenAddressId: 0,
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
        this.$router.push("/addaddress");
      },
      onEdit(item, index) {
        localStorage.setItem("setAdd", JSON.stringify(item));
        this.$router.push("/modaddress");
      },
      onClickLeft() {
        // Toast("返回");
        this.$router.push("/center");
      },
    },
    created() {
      this.$store.commit("isShowFooterNav", false);
      this.$http.get("http://39.97.219.143:8888/api/v1/user/info").then((ret) => {
        if (
          JSON.parse(localStorage.getItem(ret.userinfo.mobile + ":address"))
        ) {
          if (ret.code == 0) {
            this.list = JSON.parse(
              localStorage.getItem(ret.userinfo.mobile + ":address")
            );
            this.list.forEach((v) => {
              if (v.isDefault == true) {
                this.chosenAddressId = v.id;
              }
            });
          } else {
            Toast(ret.msg);
            this.$router.push("/user/login");
          }
        }
      });
    },
  };
</script>
