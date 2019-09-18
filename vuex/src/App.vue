<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{count}}
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  created() {
    console.log(this.$store.state.count)
    this.$store.commit('changeCount', 3)
    console.log(this.$store.getters.getCount)
    console.log(this.$store.dispatch('getChange', 4))
  },
  computed: mapState({
    count() {
      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      return this.$store.state.count
    }
  })
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
