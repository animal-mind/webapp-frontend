import Vue from 'vue';
import './plugins/vuetify';
import App from './App';
import router from './router';
import store from './store';

window._ = require('lodash');

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
