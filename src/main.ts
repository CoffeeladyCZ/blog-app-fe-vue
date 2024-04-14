import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import { createPinia } from 'pinia';
import './style.css';
import 'primevue/resources/themes/aura-light-green/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css'
import VueCookies from 'vue3-cookies';
import ToastService from 'primevue/toastservice';

import router from './router';
import Button from "primevue/button";
import Card from 'primevue/card';
import Dialog from 'primevue/dialog';
import Divider from 'primevue/divider';
import Editor from 'primevue/editor';
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';
import Image from 'primevue/image';
import Textarea from 'primevue/textarea';
import Tooltip from 'primevue/tooltip';
import FileUpload from 'primevue/fileupload';
import FloatLabel from 'primevue/floatlabel';

import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();

app.use(VueCookies);
app.use(PrimeVue);
app.use(router);
app.use(pinia);
app.use(ToastService);

app.component('PButton', Button);
app.component('PCard', Card);
app.component('PDialog', Dialog);
app.component('PDivider', Divider);
app.component('PEditor', Editor);
app.component('PMenubar', Menubar);
app.component('PInputText', InputText);
app.component('PImage', Image);
app.component('PTextarea', Textarea);
app.component('PFileUpload', FileUpload);
app.component('PFloatLabel', FloatLabel);
app.directive('PTooltip', Tooltip);

app.mount('#app');
