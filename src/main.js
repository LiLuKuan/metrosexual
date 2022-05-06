import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import { JsBridge } from '@/utils/bridge';
// import { EventTracking } from '@/utils/track';

import MetaInfo from 'vue-meta-info'

import '@/assets/styles/custom.scss';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App);

app.config.globalProperties.$jsBridge = JsBridge;
// app.config.globalProperties.$tracking = EventTracking;

app.use(store).use(router).use(MetaInfo).use(VueSweetalert2).mount('#app')