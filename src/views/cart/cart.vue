<template>
  <div class="shop">
    <!-- 未登录 -->
    <van-nav-bar
      title="购物车"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 购物车为空列表 -->
    <div class="shopCnt" v-show="lookList">
      <span class="iconfont icon-gouwuche shopLogo"></span>
      <br />
      <span class="shopTxt">购物车空空的，快去逛逛吧！</span>
      <br />
      <van-button @click="go" plain type="primary" class="goBtn"
        >去逛逛</van-button
      >
    </div>
    <!-- 购物车不为空列表 -->
    <div class="shopList" v-show="shopList">
      <ul class="listUl">
        <van-checkbox-group v-model="Select" ref="checkboxGroup">
          <li v-for="(item, index) in datas" :key="index">
            <!-- <van-checkbox v-model="checked" checked-color="rgb(8,182,125)" class="checkbox_" value="current1" /> -->

            <van-checkbox
              class="checkbox_"
              checked-color="rgb(8,182,125)"
              :name="item.goods_id"
              @click="tog(item)"
            ></van-checkbox>

            <div class="look_img">
              <img style="width: 84px" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1433308187,332294083&fm=11&gp=0.jpg" />
            </div>
            <div class="detailed">
              <div class="detailed_1">
                <span class="sp_1">{{ item.goods_name | sub }}</span>
                <br />
                <span class="sp_2">￥</span>
                <span class="sp_3">{{ item.goods_price }}</span>
              </div>
              <div class="detailed_2">
                <button class="deleteBtn" @click="dele(item.goods_id)">
                  删除
                </button>
                <div class="vant_ste">
                  <van-stepper
                    :value="item.num"
                    min="1"
                    :max="item.goods_storage"
                    input-width="20px"
                    button-size="25px"
                    @plus="plus(item)"
                    @minus="minus(item)"
                  />
                </div>
              </div>
            </div>
          </li>
        </van-checkbox-group>
      </ul>
    </div>
    <div class="footerShop">
      <van-submit-bar :price="price" button-text="去结算" @submit="onSubmit">
        <!-- <van-checkbox v-model="checked_2">全选</van-checkbox> -->
        <van-checkbox type="primary" @click="checkAll" v-model="check"
          >全选</van-checkbox
        >
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
  import "@/assets/font_shop/iconfont.css";
  import Vue from "vue";
  import {
    Button,
    SubmitBar,
    Checkbox,
    CheckboxGroup,
    Stepper,
    NavBar,
  } from "vant";

  Vue.use(Button);
  Vue.use(SubmitBar);
  Vue.use(Checkbox);
  Vue.use(CheckboxGroup);
  Vue.use(Stepper);
  Vue.use(NavBar);
  export default {
    data() {
      return {
        title: "原膳澳洲和牛上脑牛排(M4-5)180g",
        money: 128.0,
        value: 1,
        src:
          "https://img11.yiguoimg.com/d/items/2020/200706/9288740634372326_300.jpg",

        lookList: false,
        check: false,
        shopList: true,
        price: 0,
        Select: [],
        datas: [],
        number_: 0,
        mobile: 0,
      };
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1);
      },
      tog(item) {
        if (this.Select.includes(item.goods_id)) {
          item.buy = true;
        } else {
          item.buy = false;
        }
      },
      go() {
        this.$router.push("/frist");
      },
      onSubmit() {
        console.log(this.price / 100);
        this.$router.push('/alipay')
      },
      checkAll() {
        console.log(this.check);

        this.datas.forEach((v) => {
          v.buy = this.check;
        });
      },
      dele(val) {
        this.datas.forEach((v, k) => {
          if (val === v.goods_id) {
            this.datas.splice(k, 1);
            return;
          }
        });
      },
      plus(val) {
        console.log(val);
        val.num++;
        // console.log(val);
      },
      minus(val) {
        console.log(val);
        val.num--;
        // console.log(val);
      },
    },
    filters: {
      sub(val) {
        return val.substr(0, 19);
      },
    },
    async created() {
      this.$store.commit("isShowFooterNav", false);
      let ret = await this.$http("/api/info");
      if (ret.code == 0) {
        this.mobile = ret.userinfo.mobile;
        let data_ = JSON.parse(localStorage.getItem(this.mobile));
        // console.log(data_);
        if (!data_) {
          this.lookList = true;
          return;
        }
        this.datas = data_;
        let bool = true;
        this.datas.forEach((v) => {
          if (v.buy) {
            this.Select.push(v.goods_id);
          } else {
            bool = false;
          }
        });
        this.check = bool;
      } else {
        this.lookList = true;
      }
    },
    beforeDestroy() {
      this.$store.commit("isShowFooterNav", true);
    },
    watch: {
      datas: {
        handler() {
          // console.log(this.datas)
          localStorage.setItem(this.mobile, JSON.stringify(this.datas));
          this.price = 0;
          this.Select = [];
          this.datas.forEach((v) => {
            if (v.buy) {
              this.price += v.num * v.goods_price * 100;
              this.Select.push(v.goods_id);
            }
          });
          this.check = this.Select.length === this.datas.length;

          if (this.datas.length == 0) {
            this.lookList = true;
          }
        },
        deep: true,
      },
      Select: {
        handler(val) {
          this.price = 0;
          this.check = this.Select.length === this.datas.length;
          this.datas.forEach((v) => {
            if (v.buy) {
              this.price += v.num * v.goods_price * 100;
            }
          });
        },
        deep: true,
      },
    },
  };
</script>
<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .shop {
    width: 100%;
    height: 823px;
    background-color: rgb(244, 244, 244);
  }
  .shoping {
    width: 100%;
    height: 43px;
    text-align: center;
    line-height: 43px;
    color: #808080;
    font-size: 12px;
    background-color: white;
    margin-bottom: 10px;
  }
  .loginShop {
    border: none;
    background-color: white;
    color: #808080;
    border-radius: 2px;
    padding-left: 15px;
    padding-right: 15px;
    // padding-top: 3px;
    // padding-bottom: 3px;
    margin-left: 5px;
    font-size: 13px;
  }
  .shopCnt {
    text-align: center;
    width: 100%;
    height: 400px;
    background-color: white;
  }
  .shopLogo {
    display: inline-block;
    margin-top: 70px;
    margin-bottom: 20px;
    font-size: 150px;
    color: #808080;
    background-color: white;
  }
  .shopTxt {
    color: #808080;
    font-size: 14px;
    background-color: white;
  }
  .goBtn {
    background-color: white;
    margin-top: 40px;
    padding-left: 50px;
    padding-right: 50px;
  }
  .listUl li {
    width: 100%;
    height: 110px;
    background-color: white;
    margin-bottom: 1px;
  }
  .checkbox_ {
    padding-top: 49px;
    padding-left: 10px;
    padding-right: 10px;
    float: left;
  }
  .look_img {
    width: 140px;
    height: 95px;
    padding-top: 13px;
    // background-color: red;
  }
  .detailed {
    width: 260px;
    height: 108px;
    // background-color: green;
    float: right;
    margin-top: -107px;
    .detailed_1 {
      margin-left: 20px;
      width: 60%;
      height: 100%;
      // background-color: orange;
      float: left;
      .sp_1 {
        display: inline-block;
        margin-top: 5px;
        margin-bottom: 30px;
        color: #333333;
        font-size: 14px;
      }
      .sp_2,
      .sp_3 {
        color: red;
        font-size: 16px;
      }
    }
    .detailed_2 {
      width: 30%;
      height: 100%;
      // background-color: lightblue;
      float: left;
      text-align: center;
      .deleteBtn {
        margin-top: 25px;
        background-color: white;
        border: none;
        color: red;
      }
      .vant_ste {
        margin-top: 20px;
      }
    }
  }
</style>
