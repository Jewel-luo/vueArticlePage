import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: window.sessionStorage.getItem('user'),
    token: window.sessionStorage.getItem('token')
  },
  mutations: mutations,
  actions: {

  },
  modules: {

  }
})