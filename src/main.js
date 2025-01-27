import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useApiFetchStore } from './stores/local/apiFetch.js'

import App from './App.vue'
import router from './router'
import vuetify from '../plugins/vuetify.js'
import prismic from '../plugins/prismic.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(prismic)

// Call fetchHandler when the app initializes
const store = useApiFetchStore()
store.fetchHandler()

app.mount('#app')
