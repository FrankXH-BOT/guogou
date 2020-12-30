
<template>
  <div>
    <van-cell is-link @click="showPopup">当前地区{{ $store.state.city }}</van-cell>
    <van-popup v-model="show" position="bottom" style="height: 60%">
      <van-picker
        title="选择地区"
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="onCancel"
    /></van-popup>
    <van-popup v-model="showtwo" position="bottom" style="height: 60%">
      <van-picker title="选择地区" 
      show-toolbar 
      :columns="columnstwo"
      @confirm="onConfirmtwo"
    @cancel="onCanceltwo"
    /></van-popup>
  </div>
</template>
<script>
import url from "@/config/uri";
import Vue from "vue";
import { Cell, CellGroup, Popup, Picker } from "vant";

Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Popup);
Vue.use(Picker);
export default {
  data() {
    return {
      city: "",
      show: false,
      showtwo: false,
      columns: [],
      list: [],
      columnstwo: [],
      listtwo: [],
    };
  },
  created() {
    this.$http.get(url.getcity).then((ret) => {
      this.list = ret.datas;
      ret.datas.forEach((v) => {
        this.columns.push(v.province_name);
      });
    });
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    onConfirm(val, index) {
      this.$store.commit("setonecity",val)
      let x = 340;
      this.$http.post(url.getcitytwo + x).then((ret) => {
          this.columnstwo = []
        this.listtwo = ret.datas;
        ret.datas.forEach((v) => {
          this.columnstwo.push(v.city_name);
        });
        this.show = false;
        this.showtwo = true
      });
    },
    onCancel() {
      this.show = false;
    },
    onCanceltwo(){
        this.showtwo = false;
        this.show = true
    },
    onConfirmtwo(val){
      this.$store.commit("settwocity",val)
      this.$router.push("/")
    }
  },
};
</script>
<style scoped lang="scss">
</style>
