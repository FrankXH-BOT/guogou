import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jwt: '',
  },
  mutations: {
    setJwt(state,val) {
      
      localStorage.setItem('jwt', val);
      state.jwt = val;
    },
  },
  actions: {
  },
  modules: {
  }
})
