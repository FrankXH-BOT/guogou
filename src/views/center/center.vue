<template>
  <div class="center1">
    <!--头部  -->
    <div>
      <i class="iconfont icon-shezhi1 setting" @click="run"></i>
    </div>
    <div>
      <div class="header">
        <div class="header-center">
          <span class="header_sculpture">
            <img
              class="header_sculpture_img"
              src="https://img02.yiguo.com/e/web/150703/00781/140145/no-pic.jpg"
              v-show="list"
            />
            <!-- <img
            class="header_sculpture_img"
            :src="$store.state.mobile"
            v-show="!$store.state.mobile"
          /> -->
          </span>
          <div class="log" v-show="!list">
            <span class="header_signIn" @click="signIn">登录</span>
            <span>/</span>
            <span class="header_signIn" @click="signUp">注册</span>
          </div>
          <div class="log" v-show="list">
            <span class="header_signIn">{{ list }}</span>
          </div>
        </div>
      </div>

      <!-- account -->
      <div class="account">
        <p>
          <span>-</span>
          <span>卡包余额</span>
        </p>
        <p>
          <span>-</span>
          <span>悠币</span>
        </p>
      </div>
      <div class="listTop">
        <van-grid :column-num="5" :border="false">
          <van-grid-item text="待支付" @click="gocart">
            <img
              src="https://img07.yiguoimg.com/d/web/180608/01261/105825/unpaid.png"
              alt=""
            />
            <span>待支付</span>
          </van-grid-item>
          <van-grid-item text="待收货">
            <img
              src="https://img07.yiguoimg.com/d/web/180608/01261/105825/take.png"
              alt=""
            />
            <span>待收货</span>
          </van-grid-item>
          <van-grid-item text="评价送悠币">
            <img
              src="https://img05.yiguoimg.com/d/web/180608/01261/105825/evaluate.png"
              alt=""
            />
            <span>评价</span>
          </van-grid-item>
          <van-grid-item text="在线退换货">
            <img
              src="https://img06.yiguoimg.com/d/web/180608/01261/105825/changing.png"
              alt=""
            />
            <span>退换货</span>
          </van-grid-item>
          <van-grid-item text="全部订单">
            <i style="font-size:20px" class="iconfont icon-quanbudingdan"></i>
            <span>全部订单</span>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="main">
        <van-grid :column-num="4">
          <van-grid-item class="main_list" text="文字" @click="goDiscount">
            <img
              src="https://img07.yiguoimg.com/d/web/181029/00591/155051/coupons.png"
            />
            <span>优惠券</span>
          </van-grid-item>
          <van-grid-item class="main_list" text="文字">
            <img
              src="https://img06.yiguoimg.com/d/web/181029/00591/155051/yellowcard.png"
            />
            <span>充值卡</span>
          </van-grid-item>
          <van-grid-item class="main_list" text="文字">
            <img
              src="https://img07.yiguoimg.com/d/web/181029/00591/155051/delivery.png"
            />
            <span>提货券</span>
          </van-grid-item>
          <van-grid-item class="main_list" text="文字" @click="goAddress">
            <img
              src="https://img07.yiguoimg.com/d/web/181029/00591/155051/address.png"
            />
            <span>收货地址</span>
          </van-grid-item>
          <van-grid-item class="main_list" text="文字" @click="getQuestion">
            <img
              src="https://img06.yiguoimg.com/d/web/181029/00591/155051/help.png"
            />
            <span>帮助中心</span>
          </van-grid-item>
          <van-grid-item class="main_list" text="文字">
            <img
              src="https://img02.yiguo.com/e/web/130101/app/icon/usercenter/box@3x.png"
            />
            <span>我的团购</span>
          </van-grid-item>
          <van-grid-item class="main_list" text="文字" @click="getBalance">
            <img
              src="https://img06.yiguoimg.com/d/web/181121/00591/143839/account-icon.png"
            />
            <span>账户余额</span>
          </van-grid-item>
          <van-grid-item class="main_list" text="文字">
            <img
              src="https://img07.yiguoimg.com/d/web/181029/00591/155051/service.png"
            />
            <span>在线客服</span>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>
<script>
  import "@/assets/font_center/iconfont.css";
  import Vue from "vue";
  import { Grid, GridItem } from "vant";

  Vue.use(Grid);
  Vue.use(GridItem);
  export default {
    data() {
      return {
        list:""
      };
    },
    methods: {
      signIn() {
        this.$router.push("/user/login");
      },
      signUp() {
        this.$router.push("/user/register");
      },
      getBalance(){
      this.$router.push("/balance");

      },
    getQuestion(){
        this.$router.push("/question");

    },
      goDiscount() {
        this.$router.push("/discount");
      },
      goAddress() {
        this.$router.push("/address");
      },
      run(){
        this.$router.push("/Logout")
      },
      gocart(){
        this.$router.push("/cart")
      }
    },
    created() {
      let x = localStorage.getItem("jwt");
      if (!x) {
        return;
      } else {
        this.$http.get("http://localhost/api/v1/user/info").then((ret) => {
          if (ret.code === 0) {
            this.list = ret.userinfo.mobile
          }
        });
      }
    },
  };
</script>
<style lang="scss" scoped>
  i {
    font-style: none;
  }
  img,
  span {
    display: block;
  }
  .log span {
    display: inline;
  }
  .center1 {
    width: 100%;
    height: 700px;
    background: rgb(244, 244, 244);
  }
  .setting {
    display: inline-block;
    position: absolute;
    top: 15px;
    right: 25px;
    font-size: 20px;
    z-index: 1;
  }
  .icon-shezhi1 {
    color: rgb(192, 230, 220);
  }
  .header {
    width: 100%;
    height: 140px;
    background: #2dd282
      url(https://img06.yiguoimg.com/d/web/180517/01262/143351/bgimg.jpg);
    background-size: 100% 100%;
    overflow: hidden;
  }
  .header-center {
    width: 100%;
    height: 68px;
    margin-top: 30px;
    position: relative;
  }
  .header_sculpture {
    display: inline-block;
    width: 76px;
    height: 76px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: #2dd282;
    background: rgba(255, 255, 255, 0.5);
    position: absolute;
    left: 15px;
  }
  .header_sculpture_img {
    height: 68px;
    width: 68px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
  .log {
    position: absolute;
    left: 110px;
    top: 25px;
    color: #fff;
  }
  .account {
    width: 100%;
    height: 54px;
    background: #fff;
    display: flex;
    justify-content: space-between;
  }
  .account p {
    width: 50%;
    height: 100%;

    text-align: center;
    line-height: 100%;
    margin-top: 5px;
    padding-bottom: 10px;
  }
  .account p span {
    display: block;
    font-size: 10px;
  }
  .listTop {
    padding: 10px 0;
  }
  .listTop img {
    width: 20px;
  }
  .listTop span,
  .main span {
    font-size: 12px;
    color: #333333;
    margin-top: 7px;
  }
  .main_list {
    width: 100%;
    height: 82px;
  }
  .main img {
    width: 40px;
  }
</style>
