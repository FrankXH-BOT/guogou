<template>
    <div>
        <div>
         <van-nav-bar
      title="余额"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    </div>
    <div class="zt">
      
        <strong>￥1000000000000000000000000</strong>
    </div>
    </div>
</template>

<script>
export default {
    methods: {
         onClickLeft() {
        this.$router.go(-1);
      },
    },
}
</script>
<style lang="scss" scope>
.zt{
    text-align: center;
    
    strong{
        color: red;
        font-size: 1.125rem;
    }

}
    
</style>