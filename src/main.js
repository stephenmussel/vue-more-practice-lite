// NOTES: this is where the Vue app is created

import { createApp } from 'vue'
import App from './App.vue'

// NOTES: App instance won't render until its .mount() method is called
createApp(App).mount('#app')
