import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import App from './App.vue'
import router from './router'
import store from './store'
import VInput from '@/components/VInput.vue'
import VButton from '@/components/VButton.vue'
import VLink from '@/components/VLink.vue'

Vue.config.productionTip = false

Vue.use(VueCompositionApi)
Vue.component(VInput.name, VInput)
Vue.component(VButton.name, VButton)
Vue.component(VLink.name, VLink)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
