import { createApp } from 'vue'
import App from './App.vue'

import router from "@/routes";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

// Global CSS
import '../src/assets/App.css'

import {createHead} from "@vueuse/head";
const head = createHead()

createApp(App).use(head).use(router, bootstrap).mount('#app')