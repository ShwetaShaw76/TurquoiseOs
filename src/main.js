import { createApp } from 'vue'
import Screen from './Screen.vue'

import App from './App.vue'

import router from './router'

const screen = createApp(Screen)
const app = createApp(App);

app.use(router)


screen.mount('#app');

setTimeout(()=>{
    screen.unmount();
    app.mount("#app")
    
},5000);


// import router from './router'
// import Language from '@/components/Language.vue'
// import Toppanel from './components/Toppanel.vue'
// import Homescreen from './components/Homescreen.vue'
// import Appscreen from './components/Appscreen.vue'



// const langSelc = createApp(Language)
// const topPanel = createApp(Toppanel)
// const homeScreen = createApp(Homescreen)
// const appScreen = createApp(Appscreen)

// screen.use(router)
// langSelc.use(router)
// topPanel.use(router)
// homeScreen.use(router)
// appScreen.use(router)


// langSelc.mount("#app")

// topPanel.mount('#app')
// appScreen.mount('#app')






