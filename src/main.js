import { createApp } from 'vue'

import Screen from './Screen.vue'
import router from './router'
import Language from '@/components/Language.vue'
import Toppanel from './components/Toppanel.vue'
import Homescreen from './components/Homescreen.vue'
import Appscreen from './components/Appscreen.vue'


const screen = createApp(Screen)
const langSelc = createApp(Language)
const topPanel = createApp(Toppanel)
const homeScreen = createApp(Homescreen)
const appScreen = createApp(Appscreen)

screen.use(router)
langSelc.use(router)
topPanel.use(router)
homeScreen.use(router)
appScreen.use(router)

// screen.mount('#app')
// langSelc.mount("#app")
// topPanel.mount('#app')
// homeScreen.mount('#app')
appScreen.mount('#app')