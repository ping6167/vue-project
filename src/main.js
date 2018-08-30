import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//引入echarts
import echarts from 'echarts';
Vue.prototype.$echarts = echarts
Vue.use(ElementUI);
Vue.prototype.$http = axios



// 清除警告
Vue.config.silent = true;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
