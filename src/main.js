import Vue from 'vue';
import App from '@/app';
import router from './router/router';
import store from './store';
import Vue2Filters from 'vue2-filters';

Vue.use(Vue2Filters);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
