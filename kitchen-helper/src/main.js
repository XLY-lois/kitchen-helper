import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from 'axios';
import qs from 'qs';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$http = axios;
Vue.prototype.$qs=qs;
axios.defaults.baseURL = 'http://192.168.1.105:8888/api'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
