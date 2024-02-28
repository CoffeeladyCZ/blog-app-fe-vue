import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import { createPinia } from 'pinia';
import './style.css';
import 'primevue/resources/themes/aura-light-green/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css'

import router from './router';
// import { trackPageview, trackEvent } from "../analytics-api.js";
import Button from "primevue/button";
import Card from 'primevue/card';
import Divider from 'primevue/divider';
import Menubar from 'primevue/menubar';

import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();

app.use(PrimeVue);
app.use(router);
app.use(pinia);

app.component('PButton', Button);
app.component('PCard', Card);
app.component('PDivider', Divider);
app.component('PMenubar', Menubar);

app.mount('#app');
