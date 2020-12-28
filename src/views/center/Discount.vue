<template>
  <div>
    <van-nav-bar
      title="优惠券"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 优惠券单元格 -->
    <van-coupon-cell
      :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      @click="showIt"
    />
    <!-- 优惠券列表 -->
    <van-popup
      v-model="showList"
      round
      position="bottom"
      style="height: 90%; padding-top: 4px;"
    >
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
  </div>
</template>

<script>
  import Vue from "vue";
  import { CouponCell, CouponList, NavBar } from "vant";

  Vue.use(CouponCell);
  Vue.use(CouponList);
  Vue.use(NavBar);
  const coupon = {
    available: 1,
    condition: "无使用门槛\n最多优惠12元",
    reason: "",
    value: 150,
    name: "优惠券名称",
    startAt: 1609084800,
    endAt: 1609344000,
    valueDesc: "1.5",
    unitDesc: "元",
  };
  export default {
    data() {
      return {
        chosenCoupon: -1,
        coupons: [coupon],
        disabledCoupons: [coupon],
        showList: false,
      };
    },
    methods: {
      onChange(index) {
        this.showList = false;
        this.chosenCoupon = index;
      },
      onExchange(code) {
        this.coupons.push(coupon);
      },
      showIt() {
        this.showList = true;
      },
      onClickLeft() {
        // Toast("返回");
        this.$router.push('/center');
      },
    },
    created() {
        this.$store.commit("isShowFooterNav", false);
    },
    beforeDestroy() {
        this.$store.commit("isShowFooterNav", true);
    },
  };
</script>
