<template>
  <div>
    <van-nav-bar
      title="添加地址"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      :address-info="data"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
  import Vue from "vue";
  import area from "./area";
  import { AddressEdit, Toast, NavBar } from "vant";

  Vue.use(AddressEdit);
  Vue.use(Toast);
  Vue.use(NavBar);
  export default {
    data() {
      return {
        areaList: area,
        searchResult: [],
        data: {},
      };
    },
    methods: {
      onSave(val) {
        this.$http.get("http://39.97.219.143:8888/api/v1/user/info").then((ret) => {
          if (ret.code == 0) {
            let address = JSON.parse(
              localStorage.getItem(ret.userinfo.mobile + ":address")
            );
            if (address) {
              let id = 0;
              address.forEach((v) => {
                if (v.id > id) {
                  id = v.id;
                }
              });
              id++;
              val.id = id;
              val.address =
                val.province + val.city + val.county + val.addressDetail;
              address.forEach((v) => {
                if (val.isDefault) {
                  v.isDefault = false;
                }
              });
              address.push(val);
              localStorage.setItem(
                ret.userinfo.mobile + ":address",
                JSON.stringify(address)
              );
            } else {
              let list1 = [];
              val.id = 0;
              val.address =
                val.province + val.city + val.county + val.addressDetail;
              val.isDefault = true;
              list1.push(val);
              localStorage.setItem(
                ret.userinfo.mobile + ":address",
                JSON.stringify(list1)
              );
            }
            this.$router.go(-1);
          } else {
            Toast(ret.msg);
            this.$router.push("/user/login");
          }
        });
      },
      onDelete() {
        Toast("delete");
      },
      onChangeDetail(val) {
        if (val) {
          this.searchResult = [];
        }
      },
      onClickLeft() {
        // Toast("返回");
        this.$router.go(-1);
      },
    },
    created() {
      this.$store.commit("isShowFooterNav", false);
      let add1 = JSON.parse(localStorage.getItem("setAdd"));
      if (add1) {
        this.data = add1;
      }
    },
    beforeDestroy() {
      localStorage.removeItem("setAdd");
    },
  };
</script>
