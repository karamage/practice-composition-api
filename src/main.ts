import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from "@vue/composition-api"
import KyPlugin from 'vue-ky-plugin'
 
Vue.use(VueCompositionApi)
Vue.use(KyPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
