import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
  },
  mutations: {
    add(state) {
      state.count++
    },
    sub(state) {
      state.count--
    },
  },
  actions: {
    addAsync(context) {
      setTimeout(() => {
        context.commit('add')
      }, 1000)
    },
  },
  getters: {
    showNum(state) {
      return '当前计数器最新的值为：' + state.count
    },
  },
  modules: {},
})
