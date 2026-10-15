import './assets/main.css'

import { createApp } from 'vue'
import App from './App.jsx'
import router from './utils/router.jsx'

createApp(App).use(router).mount('#app')
