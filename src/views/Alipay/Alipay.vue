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
        <img :src="aa" alt="">
    </div>
    </div>
</template>
<script>
import uri from "@/config/uri";

export default {
    data() {
        return {
            aa:''
        }
    },
    
    created() {
        this.$http.get(uri.getAlipay).then((ret) => {
          
             this.aa='https:'+ret
           
           
          
           
        })
    },
    methods: {
         onClickLeft() {
        this.$router.go(-1);
      },
}}
</script>
<style lang="scss" scope>
   .imga{
       width: 100%;
       height: 100%;
       margin: 50% auto;
       text-align: center;
   }
    
</style>