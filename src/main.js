/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import InfoPage from './pages/InformationPage.vue'
import Home from './pages/Home.vue'


Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home-page', component: Home },
  { path: '/information-page', name: 'information-page', component: InfoPage }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),

}).$mount('#app')
