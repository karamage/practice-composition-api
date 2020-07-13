import Vue from 'vue'
import App from './App.vue'
import KyPlugin from 'vue-ky-plugin'
import VueCompositionApi from "@vue/composition-api"

Vue.use(VueCompositionApi)
Vue.use(KyPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
