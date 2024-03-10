import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'
import 'swiper/css'
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
import { localize, setLocale } from '@vee-validate/i18n'
import * as AllRules from '@vee-validate/rules'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import { LoadingPlugin, Component } from 'vue-loading-overlay'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import CKEditor from '@ckeditor/ckeditor5-vue'
import 'vue-loading-overlay/dist/css/index.css'

defineRule('email', AllRules.email)
defineRule('required', AllRules.required)
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})

router.afterEach((to, from, failure) => {
  window.scrollTo(0, 0)
})
setLocale('zh_TW')
library.add(fas, far)

const app = createApp(App)

app.use(LoadingPlugin)
app.use(CKEditor)
app.component('myLoading', Component)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)
app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)

app.mount('#app')
