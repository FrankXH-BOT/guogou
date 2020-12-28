import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jwt: '',
    onecity:"",
    twocity:"",
    city:"",
    isShowFooter: true,
  },
  mutations: {
    isShowFooterNav(state, val) {
      state.isShowFooter = val;
  },
    setJwt(state,val) {
      
      localStorage.setItem('jwt', val);
      state.jwt = val;
    },
    setonecity(state,val){
      state.onecity = val;
    },
    settwocity(state,val){
      state.twocity = val;
      state.city = state.onecity + state.twocity
      let cc = {
        onecity : state.onecity,
        twocity : state.twocity,
        city : state.city,
      }
      localStorage.setItem("city",JSON.stringify(cc))
    }
  },
  actions: {
  },
  modules: {
  }
})
