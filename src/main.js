import Vue from 'vue'
import App from './App.vue'
//plugin do quill
import './plugins/quill_editor';

Vue.config.productionTip = true

new Vue({
  render: h => h(App),
}).$mount('#app')
