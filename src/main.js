import Vue from 'vue'
import App from './App.louk'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
