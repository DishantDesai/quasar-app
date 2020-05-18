import Vue from 'vue'
import App from './App.vue'
import './quasar'

Vue.config.productionTip = false
import {
  Quasar,
  QCard,
  QCardSection,
  QCardActions,
  QMenu,
  QBtn,
  ClosePopup,
  QInput,
  QDate,
  QDialog
} from 'quasar'

Vue.use(Quasar, {
  components: {
    QCard,
    QCardSection,
    QCardActions,
    QMenu,
    QBtn,
    QInput,
    QDate,
    QDialog
  },
  directives: {
    ClosePopup
  }
})
new Vue({
  render: h => h(App),
}).$mount('#app')
