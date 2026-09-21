import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.css'
import router from '@/router/index.ts';
import { createPinia } from 'pinia'
import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query'

const app = createApp(App);

const queryClient = new QueryClient();

app.use(router)
app.use(createPinia())
app.use(VueQueryPlugin, {
  queryClient,
})
app.mount('#app')
