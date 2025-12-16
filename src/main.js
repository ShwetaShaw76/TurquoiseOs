import { createApp } from 'vue'
import App from './App.vue'
import Screen from './Screen.vue'
import router from './router'

const app = createApp(App)
const screen = createApp(Screen)

app.use(router)

// app.mount('#app')
screen.mount('#app')