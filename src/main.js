import { createApp } from "vue";
import App from './App.vue'

import '@/assets/css/tailwind.css'

import { store } from "./store";
import { router } from './router'

const app = createApp(App)

app.use(router, store)

app.mount('#app')

