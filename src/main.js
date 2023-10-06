import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initBugsnag } from './services/error-handler'

const app = createApp(App)

const bugsnag = initBugsnag()
const bugsnagVue = bugsnag.getPlugin('vue')

app.use(router)
app.use(bugsnagVue)

app.mount('#app')
