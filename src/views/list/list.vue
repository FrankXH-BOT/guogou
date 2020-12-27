<template>
  <div>
    <van-nav-bar right-text="取消" style="font-size: 20px">
      <template #title>
        <input type="text" class="inp" />
      </template>
    </van-nav-bar>
    <div class="box">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item :title="item.gc_name" v-for="(item,index) in list" :key="item.gc_id" style="width:100px" @click="run(index+1)"/>
      </van-sidebar>
    <router-view class="tl"></router-view>
    </div>
  </div>
</template>

<script>
import url from "@/config/uri"
import Vue from "vue";
import { NavBar, Sidebar, SidebarItem } from "vant";

Vue.use(NavBar);
Vue.use(Sidebar);
Vue.use(SidebarItem);
export default {
    data() {
    return {
      activeKey: 0,
      list:[]
    };
  },
  created () {
      this.$http.post(url.getonelist).then(ret=>{
          this.list = ret.datas
      })
  },
  methods: {
      run(id){
          if(id>5&id<10){
              id=id - 4;
          }else if(id>=10){
              id=id - 9
          }else{
              id=id
          };
          this.$router.push("/list/twolist" + `?id=${id}`)
      }
  }
};
</script>
<style lang="scss" scoped>
.inp {
  border-radius: 10px;
}
.box{
    display: flex;
}
.tl{
    flex:1
}
</style>
