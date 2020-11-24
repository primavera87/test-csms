import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: require('@/data/example.json')
  },
  getters: {
    data: state => {
      return state.data
    }
  }
})
