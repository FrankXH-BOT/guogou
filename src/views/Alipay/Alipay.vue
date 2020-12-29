<template>
  <div>
    <div>
      <van-nav-bar
        title="请扫支付码"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="imga">
      <img :src="aa" alt="" />
    </div>
  </div>
</template>
<script>
  import uri from "@/config/uri";
  export default {
    data() {
      return {
        aa: "",
        cc: "",
      };
    },

    created() {
        fetch(uri.getAlipay, {
          method: "post",
          body: " _s=sss&_f=0.01&_t=2",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            this.aa = "https:" + data.qr_code;
            this.cc = data.order_id;
          });
      setTimeout(() => {
        this.getyz();
      }, 120000);

      this.$store.commit("isShowFooterNav", false);
    },

    beforeDestroy() {
      this.$store.commit("isShowFooterNav", true);
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1);
      },
      getyz(){
           this.$http.get(uri.getorderPayStatusCheck+`?_oid=${this.cc}`).then(ret=>{
        if(ret.data.order_status==0){
         alert('还不扫寻思啥呢')
        this.$router.go(0);
     
        }
        if(ret.data.order_status==1){
            alert('干得漂亮')
        }
    })
      }
}}
</script>
<style lang="scss" scope>
  .imga {
    width: 100%;
    height: 100%;
    margin: 50% auto;
    text-align: center;
  }
</style>
