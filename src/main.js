import { createApp } from 'vue'
import App from './App.vue'

import router from "@/routes";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, fab, far);

// Global CSS
import '../src/assets/App.css'

import {createHead} from "@vueuse/head";
import Multiselect from "vue-multiselect";
const head = createHead()

createApp(App).use(head).use(router, bootstrap).component("fa", FontAwesomeIcon).component('multiselect', Multiselect).mount('#app')