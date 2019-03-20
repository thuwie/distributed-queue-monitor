// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Laue } from 'laue';
import { Cartesian } from 'laue';


Vue.config.productionTip = false
Vue.use(Laue);
Vue.component(Cartesian.name, Cartesian);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
