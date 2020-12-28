import Vue from 'vue'
import VueRouter from 'vue-router'
import frist from "./routes/frist"
import cart from "./routes/cart"
import list from "./routes/list"
import Threelist from "@/views/list/threelist"
import Notfound from "@/views/notfound"
import Detail from "./routes/detail"

import Center from "./routes/center";

import axios from "@/api/http";
import alipay from './routes/alipay'

Vue.use(VueRouter)

const routes = [
  { path: "/", redirect: "/frist" },
  { path: "/list", redirect: "/list/twolist" },
  { path: "/threelist/:gc_id", component: Threelist },
  ...frist,
  cart,
  list,
  Detail,
  alipay,

  ...Center,
  { path: "*", component: Notfound },

]

const router = new VueRouter({
  routes,
})

router.beforeEach((to, from, next) => {
  let arr = [
    '/cart',
    '/address',
    '/discount',
    "/Logout",
    '/balance',
  ];
  if (arr.includes(to.path)) {
    axios.get('/api/info').then(ret => {
      if (ret.code != 0) {
        localStorage.setItem('jwt', '');
        console.log(to);
        router.push({ path: '/user/login', query: { toUrl: to.fullPath } });
      }
      next();
    })
  } else {
    next();
  }
})

export default router
