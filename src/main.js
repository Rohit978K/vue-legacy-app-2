import Vue from 'vue'
import App from './App.vue'
import router from '@/router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { MdButton, MdContent, MdCard } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdCard)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
