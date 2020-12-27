<template>
  <div>
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="item in list" :key="item.gc_id" width="90" height="130">
        <van-image :src="item.cate_img"  width="90" height="90" @click="run(item.gc_id)"/>
        <p>{{item.gc_name}}</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
import Vue from "vue";
import url from "@/config/uri";
import { Grid, GridItem, Image as VanImage } from "vant";

Vue.use(Grid);
Vue.use(GridItem);
Vue.use(VanImage);
export default {
  data() {
    return {
      list: [],
      id: 1,
    };
  },
  created() {

    this.$http.get(url.gettowlist + "/" + this.id).then((ret) => {
      this.list = ret.datas
    });
  },
  watch: {
    $route() {
      if (this.$route.query.id) {
        this.id = this.$route.query.id;
      }
      this.$http.get(url.gettowlist + "/" + this.id).then((ret) => {
        this.list = ret.datas
      });
    },
  },
  methods: {
      run(id){
          this.$router.push(`/threelist/${id}`)
      }
  }
};
</script>
