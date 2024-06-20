import './assets/main.css'

import { createApp } from 'vue'

import PrimeVue from 'primevue/config'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'primevue/resources/themes/saga-blue/theme.css' // or any other theme
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(router)
app.use(PrimeVue)

app.mount('#app')
