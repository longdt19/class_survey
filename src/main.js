import Vue from 'vue'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/vi'
import moment from 'moment'
import './element-variables.scss'
import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'
import { mapGetters } from 'vuex'

Vue.use(Element, {
  size: 'medium', // set element-ui default size
  locale
})

moment.locale('vi')
// Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

Vue.mixin({
  computed: {
    ...mapGetters('Common', ['common_data'])
  }
})

// router.beforeEach((to, _from, next) => {
//   console.log('backend', process.env.BACKEND_URL)
//   next()
// })

const createApp = () => {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
  })
}

createApp()
