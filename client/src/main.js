import Vue from 'vue';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import vuetify from './plugins/vuetify';

Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.config.productionTip = false

const router = new VueRouter({mode: 'history', routes});

Vue.use(router);

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
