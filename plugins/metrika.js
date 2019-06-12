import Vue from 'vue'
import VueYandexMetrika from 'vue-yandex-metrika'

Vue.use(VueYandexMetrika, {
  id: 54037297,
  env: process.env.NODE_ENV,
  options: { webvisor: true, clickmap: true, trackLinks: true, accurateTrackBounce: true }
  // other options
})
