import Vue from 'vue'
import VueRouter from 'vue-router'
import frist from "./routes/frist"
import cart from "./routes/cart"
import list from "./routes/list"
import Threelist from "@/views/list/threelist"
import Notfound from "@/views/notfound"
import Detail from "./routes/detail"

import Center from "./routes/center";


Vue.use(VueRouter)

const routes = [
  { path: "/", redirect: "/frist" },
  { path: "/list", redirect: "/list/twolist" },
  { path: "/threelist/:gc_id", component: Threelist },
  ...frist,
  cart,
  list,
  Detail,

  ...Center,
  { path: "*", component: Notfound },

]

const router = new VueRouter({
  routes,
})

router.beforeEach((to,from,next) => {
  let arr = [
    '/cart',
  ];
  if(arr.includes(to.path) && !localStorage.getItem('jwt')) {
    console.log(to);
    router.push({path:'/user/login',query: {toUrl:to.fullPath}});
  }else {
    next();
  }
})

export default router
