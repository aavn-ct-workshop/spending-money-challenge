import { createApp } from 'vue'
import 'primevue/resources/themes/saga-blue/theme.css'; //theme
import 'primevue/resources/primevue.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css';

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import InputText from "primevue/inputtext";
import Card from 'primevue/card';

import App from './App.vue';
import router from './routes';
import store from './store';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(PrimeVue, { ripple: true });
app.component('Button', Button);
app.component('InputText', InputText);
app.component('Card', Card);
app.mount('#app')