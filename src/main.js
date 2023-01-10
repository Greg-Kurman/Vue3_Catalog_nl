import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import vue3Spinner from '../node_modules/vue3-spinner/lib/vue3-spinner'






const app = createApp(App)
app.use(vue3Spinner)
app.use(router)
app.mount('#app')