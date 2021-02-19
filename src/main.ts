import { createApp } from 'vue'
import { store, key } from './store'
import router from './router'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'normalize.css/normalize.css'
import './styles/index.scss'
import './permission'
import Pagination from '@/components/Pagination/index.vue'
const app = createApp(App)

app.component('Pagination', Pagination)
app.use(router)
app.use(store, key)
app.use(ElementPlus, { size: 'small', zIndex: 3000, locale })
app.mount('#app')
