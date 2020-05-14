import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

// import TicketAPIServies from '@/services/TicketServices'


// Vue.prototype.$ticket_api = TicketAPIServies

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
