<template>
  <div>
    <div class="navBar">
      <van-nav-bar
        title="标题"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        fixed
      />
    </div>

    <van-loading size="24px" vertical v-show="isShow">加载中...</van-loading>
    <van-card
      :price="item.goods_price"
      :title="item.goods_name"
      :origin-price="item.goods_marketprice"
      v-for="item in list"
      :key="item.goods_id"
      thumb="http://127.0.0.1/city1.php"
    >
      <template #tags>
        <van-tag plain type="danger">{{ item.store_name }}</van-tag>
        <van-button size="small" class="cartButton" @click="addToCart(item)"
          ><i class="iconfont icon-gouwuchekong-" style="fontsize: 22px"></i
        ></van-button>
      </template>
      <template #footer> </template>
    </van-card>
  </div>
</template>

<script>
  import "@/assets/iconfont/iconfont.css";
  import Vue from "vue";
  import uri from "@/config/uri";
  import { Card, Tag, Button, NavBar, Loading, Toast } from "vant";

  Vue.use(Card);
  Vue.use(Tag);
  Vue.use(Button);
  Vue.use(NavBar);
  Vue.use(Loading);
  Vue.use(Toast);
  export default {
    data() {
      return {
        isShow: true,
        list: [],
        page: 1,
        gcId: 888,
        total: 0,
        bool: true,
      };
    },
    created() {
      this.gcId = this.$route.params.gc_id;
      // console.log(this.$route.params);
      this.$http
        .post(uri.getthreelist, `page=1&gcId=${this.gcId}`)
        .then((ret) => {
          console.log(ret);
          this.list = ret.datas.list;
          this.total = ret.datas.page_count;
          this.isShow = false;
        });
    },
    mounted() {
      window.addEventListener("scroll", () => {
        let scrollTop = document.documentElement.scrollTop;
        let height = document.documentElement.clientHeight;
        let x = document.documentElement.scrollHeight;
        if (x - scrollTop - height < 20) {
          if (this.bool) {
            this.bool = false;
            this.getData();
          }
        }
      });
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1);
      },
      addToCart(item) {
        if (this.$store.state.jwt) {
          this.$http.get("/api/info").then((ret) => {
            // console.log(ret);
            if (ret.code == 0) {
              let list = JSON.parse(localStorage.getItem(ret.userinfo.mobile));
              if (list) {
                let bool = true;
                list.forEach((v, k) => {
                  if (v.goods_id == item.goods_id) {
                    v.num++;
                    window.localStorage.setItem(
                      ret.userinfo.mobile,
                      JSON.stringify(list)
                    );
                    bool = false;
                    return;
                  }
                });
                if (bool) {
                  item.num = 1;
                  item.buy = true;
                  list.push(item);
                  window.localStorage.setItem(
                    ret.userinfo.mobile,
                    JSON.stringify(list)
                  );
                }
              } else {
                let list1 = [];
                item.buy = true;
                item.num = 1;
                list1.push(item);
                window.localStorage.setItem(
                  ret.userinfo.mobile,
                  JSON.stringify(list1)
                );
              }
              item.buy = true;
              item.num = 1;
              console.log(item);
            } else {
              console.log(ret);
              Toast(ret.msg + "2s后进行跳转");
              setTimeout(() => {
                this.$router.push("/user/login");
              }, 2000);
            }
          });
        } else {
          Toast("请登录后在添加至购物车，2s后进行跳转！");
          setTimeout(() => {
            this.$router.push("/user/login");
          }, 2000);
        }
      },
      getData() {
        if (this.page <= this.total) {
          this.$http
            .post(uri.getthreelist, `page=${this.page}&gcId=${this.gcId}`)
            .then((ret) => {
              this.page++;
              this.list = this.list.concat(ret.datas.list);
              this.bool = true;
            });
        } else {
          Toast("没有更多数据");
          this.bool = true;
        } 
      },
    },
  };
</script>

<style lang="scss" scoped>
  .navBar {
    height: 46px;
  }
  .cartButton {
    float: right;
  }
</style>
