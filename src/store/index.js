import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: localStorage.city || '深圳'
  },
  actions: {
    changethis: function(ctx, city) {
      ctx.commit('changethat', city)
    }
  },
  mutations: {
    changethat: function(state, city) {
      state.city = city
      localStorage.city = city
    }
  }
})
