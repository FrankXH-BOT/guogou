<template>
<div class="first-screen-top">
    <div  class="adress"><span style="font-size:12px">{{$store.state.twocity}}</span> <i class="arrow" @click="getcity"></i></div>
  <div class="sousuo">
  <van-search @focus="tiaozhuan" v-model="value" placeholder="请输入搜索关键词" shape="round" background="#4fc08d" />
  </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Search } from 'vant';

Vue.use(Search);
export default {
  data() {
    return {
      value: '',
    };
  },
  methods:{
      getcity(){
     this.$router.push('/city')

      },
      tiaozhuan(){
          this.$router.push('/list')
      }
  }
};
</script>


<style lang="scss" scoped>
.adress{
    float: left;
    width: 20%;
    height: 54px;
    text-align: center;
    background:#4fc08d;
    color: #fff;
    span{
        width: 20%;
        line-height: 54px;
        font-size: .46rem;
    }
    
 .arrow {
    display: inline-block;
    width: 10%;
    height: 5.6px;
    padding: 0 2px;
    background: url(https://img05.yiguoimg.com/e/web/161222/01858/110628/arrow.png) no-repeat;
    background-size: 100% 100%;

}


}

   .sousuo{
       width: 80%;
       float: right;
   }

    .first-screen-top{
      position: fixed;
      width: 100%;
      z-index: 999;
    }
    
</style>