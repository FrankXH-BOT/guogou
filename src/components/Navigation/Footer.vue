<template>
  <div class="foot">
    <van-tabbar v-model="active" placeholder  @change="changeTab" active-color="rgb(79, 192, 141)">
      <van-tabbar-item ><van-icon
                    class="iconfont icon-index"
                    slot="icon"
                    size="25px"
                />首页</van-tabbar-item>
      <van-tabbar-item><van-icon
                    class="iconfont icon-category"
                    slot="icon"
                    size="25px"
                />分类</van-tabbar-item>
      <van-tabbar-item>
        <van-icon
                    class="iconfont icon-gouwuche"
                    slot="icon"
                    size="25px"
                />购物车</van-tabbar-item>
      <van-tabbar-item ><van-icon
                    class="iconfont icon-wode1"
                    slot="icon"
                    size="25px"
                />我的易果</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import Vue from "vue";
import "@/assets/icon/iconfont.css";

import { Tabbar, TabbarItem,Icon} from "vant";
Vue.use(Icon);

Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  data() {
    return {
      active: 0,
      url: ["/frist", "/list/twolist", "/cart","/center"],
      
    };
  },
   created() {
        this.active = this.url.indexOf(this.$route.path);
    },
    methods: {
        changeTab(index) {
            this.$router.push(this.url[index]);
            // console.log(index);
        },
    },
    watch: {
        $route: function(val){
            
            this.active = this.url.indexOf(val.fullPath);
        }
    }
};
</script>
<style lang="scss" scoped>
.foot{
  height: 50px;
}




</style>