import Vue from 'vue';
import Eagle, { Options } from 'eagle.js';
import 'eagle.js/dist/eagle.css';
import VueVisible from 'vue-visible'
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import App from './App.vue';
import router from './router'

hljs.registerLanguage('javascript', javascript);
Options.hljs = hljs;

Vue.config.productionTip = false;

Eagle.slideshow.computed.isChild = function () {
  return !!this.parentWindow;
};
Eagle.slideshow.computed.isParent = function () {
  return !!this.childWindow;
};


Vue.use(Eagle);
Vue.use(VueVisible);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
