import Vue from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css";            //icons
import Button from 'primevue/button';
import Card from 'primevue/card';
import "primeflex/primeflex.css";
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';

Vue.use(PrimeVue);
Vue.use(ToastService);

Vue.component("p-button", Button)
Vue.component("p-card",Card)
Vue.component("input-text", InputText)
Vue.component("pass-word", Password)
// eslint-disable-next-line
Vue.component('toast', Toast);
//Vue.config.productionTip = false


new Vue({
  el:'#app',
  render: h => h(App),
}).$mount('#app')
