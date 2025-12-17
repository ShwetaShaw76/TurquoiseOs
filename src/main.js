import { createApp } from 'vue'
import App from './App.vue'
import Screen from './Screen.vue'
import router from './router'
import Language from '@/components/Language.vue'
import Toppanel from './components/Toppanel.vue'

const app = createApp(App)
const screen = createApp(Screen)
const langSelc = createApp(Language)
const topPanel = createApp(Toppanel)

app.use(router)
screen.use(router)
langSelc.use(router)
topPanel.use(router)

// app.mount('#app')
// screen.mount('#app')
langSelc.mount("#app")
// topPanel.mount('#app')