const env = require('dotenv').config()
// console.log('enx', env)
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'doit.kiev.ua',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Сеть кальян-баров на ВДНХ и КПИ, с ярким дизайнерским оформление интерьера. Широкая палитра вкусов табака многих производителей от легкого fumari до ядерного tangiers. Трансляция событий и турниров на игровых консолях' },
      { name: 'og:title', content: 'DOIT Сеть кальян-баров' },
      { name: 'og:description', content: 'Сеть кальян-баров на ВДНХ и КПИ, с ярким дизайнерским оформление интерьера. Широкая палитра вкусов табака многих производителей от легкого fumari до ядерного tangiers. Трансляция событий и турниров на игровых консолях' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://doit.kiev.ua' },
      { name: 'og:image', content: 'https://doit.kiev.ua/assets/logo.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Monoton:300,400,500,700|Material+Icons' }
    ]
  },
  env: env.parsed,
  plugins: ['~/plugins/vuetify.js', '~/plugins/vue2-google-maps.js', { src: '~plugins/sweet-modal', ssr: false }, { src: '~plugins/ga.js', ssr: false }],
  css: ['~/assets/style/app.styl'],
  /*
  ** Customize the progress bar color
  */
  serverMiddleware: ['~/api/telegram.js'],
  loading: { color: '#3B8070' },
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/pwa'
    // [
    //   '@nuxtjs/yandex-metrika',
    //   {
    //     id: '54037297',
    //     webvisor: true,
    //     clickmap: true,
    //     trackLinks: true,
    //     accurateTrackBounce: true
    //   }
    // ]
  ],
  icon: {
    iconSrc: './static/favicon.png',
  },
  manifest: {
    short_name: 'DOIT',
    name: 'DOIT Сеть кальян-баров',
    start_url: '/',
    background_color: '#303030',
    theme_color: '#303030'
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://doit.kiev.ua',
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
      lastmodrealtime: true
    },
    gzip: true,
    exclude: [],
    generate: false,
    routes: [
      '/',
      '/akcii',
      '/findus',
      '/galery',
      '/keitering',
      '/menu',
      '/reserv'
    ]
  },
  robots: {
    UserAgent: '*',
    Disallow: '/reserv'
  },
  // googleAnalytics: {
  //   id: 'UA-102510381-1'
  // },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['vue2-google-maps']
  }
}
