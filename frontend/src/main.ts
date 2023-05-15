import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'
import './index.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const vuetify = createVuetify({
    components,
    directives,
    display: {
        mobileBreakpoint: 'sm',
        thresholds: {
            xs: 0,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536
        },
    },
})

const app = createApp(App);

app.use(router);
app.use(VueFullPage);
app.use(vuetify);

app.mount("#app");
