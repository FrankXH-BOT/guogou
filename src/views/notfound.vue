<template>
        
        <div class="Global">
            <span>404页面被项目组长给吃了</span><br>
            <a href="JavaScript:;" @click="getshouye">点我去首页</a>
    <div class="img1">
        <img src="../../public/404.jpg" alt="">
    </div>
    </div>
</template>
<script>
export default {
    methods: {
        getshouye(){
       this.$router.push('/frist');


        }
    },
    created() {
        this.$store.commit("isShowFooterNav", false);
        
    },
    beforeDestroy() {
        this.$store.commit("isShowFooterNav", true);
        
    },
    
}
</script>

<style lang="scss" scoped>
.img1{
        width: 95%;
    height: 40%;
     position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;

   

img{
    width: 100%;
    height: 100%;
}

}
.Global{
    margin-top:10%;

    text-align: center;
span{
    font-size: 1.5625rem;
    color: red;
    font-family: STXingkai;
}
a{
    display:inline-block;
    color: red;
    font-size: 1.25rem;
    margin:  1.75rem;
    border: 1px solid red;
}
}
</style>