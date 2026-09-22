import { createApp } from 'vue' // импорт функции
import App from './App.vue' 
import router from './router' // локальный роутер
import store from './store/index.ts'

const app = createApp(App) // создается приложение

app.use(router)

app.mount('#app') // обращение к идентификатору app, монтируется некий блок (локальное приложение)
