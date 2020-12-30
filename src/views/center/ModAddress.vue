<template>
  <div>
    <van-nav-bar
      title="编辑地址"
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
        bool1: false,
      };
    },
    methods: {
      onSave(val) {
        this.$http.get("/api/info").then((ret) => {
          if (ret.code == 0) {
            let address = JSON.parse(
              localStorage.getItem(ret.userinfo.mobile + ":address")
            );
            // address.forEach((v,k)=>{
            //     if(v.id == val.id) {
            //         address[k] = val;
            //     }
            // })
            let bool = false;
            address.forEach((v, k) => {
              if (v.id == val.id) {
                address[k] = val;
                if (val.isDefault == true) {
                  bool = true;
                  this.bool1 = true;
                }
              }
            });
            if (bool) {
              address.forEach((v) => {
                if (v.id != val.id) {
                  v.isDefault = false;
                }
              });
            }
            address.forEach((v) => {
              if (v.isDefault == true) {
                this.bool1 = true;
              } else {
                this.bool1 = false;
              }
            });
            if (this.bool1 == false) {
              address[0].isDefault = true;
            }
            localStorage.setItem(
              ret.userinfo.mobile + ":address",
              JSON.stringify(address)
            );
            this.$router.go(-1);
          } else {
            Toast(ret.msg);
            this.$router.push("/user/login");
          }
        });
      },
      onDelete(val) {
        this.$http.get("/api/info").then((ret) => {
          if (ret.code == 0) {
            let address = JSON.parse(
              localStorage.getItem(ret.userinfo.mobile + ":address")
            );
            address.forEach((v, k) => {
              if (v.id == val.id) {
                if (val.isDefault == true) {
                  address[0].isDefault = true;
                }
                address.splice(k, 1);
                localStorage.setItem(
                  ret.userinfo.mobile + ":address",
                  JSON.stringify(address)
                );
                this.$router.go(-1);
                return;
              }
            });
          }
        });
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
      console.log(123);
      this.$store.commit("isShowFooterNav", false);
      let add1 = JSON.parse(localStorage.getItem("setAdd"));
      if (add1) {
        console.log(add1);
        this.data = add1;
        console.log(this.data);
      }
    },
    beforeDestroy() {
      localStorage.removeItem("setAdd");
    },
  };
</script>
