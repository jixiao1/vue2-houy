import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/global.css'
import './assets/fonts/iconfont.css'
// import ElementUI from 'element-ui'
import './utils/element/index.js'
import 'element-ui/lib/theme-chalk/index.css'

// Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
