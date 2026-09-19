import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.css'
import router from '@/router/index.ts';
import { createPinia } from 'pinia'

const app = createApp(App);

app.use(router)
app.use(createPinia())
app.mount('#app')
