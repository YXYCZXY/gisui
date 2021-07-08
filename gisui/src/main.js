import Vue from 'vue'
import App from './App.vue'
import GISUI from './index'

Vue.use(GISUI)
new Vue({
  el: '#app',
  render: h => h(App)
})
