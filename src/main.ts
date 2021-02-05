import { createApp } from 'vue'
import { store, key } from './store'
import router from './router'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css'
import './styles/index.scss'

const app = createApp(App)

app.use(router)
app.use(store, key)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.mount('#app')