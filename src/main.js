import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
// import ui from '../packages/index'
import ui from 'test-9527-ui'
import('test-9527-ui/style.css')
const app = createApp(App)
app.use(ui)
app.mount('#app')
