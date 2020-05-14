import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

// import TicketAPIServies from '@/services/TicketServices'

Vue.use(BootstrapVue)
// Vue.prototype.$ticket_api = TicketAPIServies

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
