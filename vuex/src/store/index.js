import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count:1
}

const getters = {
  getCount(state){
    return state.count
  }
}
const mutations = {
  changeCount(state,num){
    state.count += num
    console.log(state.count)
  }
}
const actions = {
  getChange(context,num){
    context.commit('changeCount',num)
    console.log(state)
  }
}
export default  new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})