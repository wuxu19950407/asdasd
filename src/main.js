// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'  
import router from './router'
import axios from 'axios'
import qs from 'qs'


Vue.config.productionTip = false
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.ajax = axios;
Vue.prototype.qs = qs;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
