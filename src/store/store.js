import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
    users: {
    }
  },
  mutations: {
    addcount (state) {
      state.count++
    },
    setUser (state, users) {
      state.users = users
    }
  },
  getters: {
    getUser: state => {
      return state.users
    }
  }
})
