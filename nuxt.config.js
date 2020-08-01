const env = require('dotenv').config()
// added
const imageminMozjpeg = require('imagemin-mozjpeg')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const isDev = process.env.NODE_ENV !== 'production'
// added

// console.log('enx', env)
module.exports = {
  mode: 'universal',
  ...(!isDev && {
    modern: 'client'
  }),
  /*
  ** Headers of the page
  */
  head: {
    title: 'doit.kiev.ua',
    htmlAttrs: {
      lang: 'ru',
      amp: true
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Первый кальян-бар на ВДНХ, с ярким дизайнерским оформление интерьера. Широкая палитра вкусов табака многих производителей от легкого fumari до ядерного tangiers. Трансляция событий и турниров на игровых консолях' },
      { name: 'og:title', content: 'DOIT Первый кальян-бар на ВДНХ' },
      { name: 'og:description', content: 'Первый кальян-бар на ВДНХ, с ярким дизайнерским оформление интерьера. Широкая палитра вкусов табака многих производителей от легкого fumari до ядерного tangiers. Трансляция событий и турниров на игровых консолях' },
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
  rootDir: __dirname,
  env: env.parsed,
  plugins: ['~/plugins/vuetify.js', '~/plugins/vue2-google-maps.js', { src: '~plugins/sweet-modal', ssr: false }, { src: '~plugins/ga.js', ssr: false }],
  css: ['normalize.css', '~/assets/style/app.styl'],
  /*
  ** Customize the progress bar color
  */
  serverMiddleware: ['~/api/index.js'],
  loading: { color: '#3B8070' },
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/pwa',
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
    // Doc: https://axios.nuxtjs.org/usage
    'nuxt-trailingslash-module',
    'nuxt-webfontloader',
    // '@nuxtjs/svg',
    // https://github.com/nuxt-community/sentry-module
    '@nuxtjs/style-resources'
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
      '/events',
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
  render: {
    // http2: {
    //     push: true,
    //     pushAssets: (req, res, publicPath, preloadFiles) => preloadFiles
    //     .map(f => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`)
    //   },
    // compressor: false,
    resourceHints: false
    // etag: false,
    // static: {
    //   etag: false
    // }
  },
  build: {
    extractCSS: false,
    filenames: {
      app: ({ isDev }) => isDev ? '[name].js' : 'js/[contenthash].js',
      chunk: ({ isDev }) => isDev ? '[name].js' : 'js/[contenthash].js',
      css: ({ isDev }) => isDev ? '[name].css' : 'css/[contenthash].css',
      img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
      font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]',
      video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]'
    },
    ...(!isDev && {
      html: {
        minify: {
          collapseBooleanAttributes: true,
          decodeEntities: true,
          minifyCSS: true,
          minifyJS: true,
          processConditionalComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          trimCustomFragments: true,
          useShortDoctype: true
        }
      }
    }),
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    },
    optimization: {
      minimize: !isDev
    },
    ...(!isDev && {
      extractCSS: {
        ignoreOrder: true
      }
    }),
    transpile: ['vue-lazy-hydration', 'intersection-observer'],
    postcss: {
      plugins: {
        ...(!isDev && {
          cssnano: {
            preset: ['advanced', {
              autoprefixer: false,
              cssDeclarationSorter: false,
              zindex: false,
              discardComments: {
                removeAll: true
              }
            }]
          }
        })
      },
      ...(!isDev && {
        preset: {
          browsers: 'cover 99.5%',
          autoprefixer: true
        }
      }),

      order: 'cssnanoLast'
    },
    extend (config, ctx) {
      const ORIGINAL_TEST = '/\\.(png|jpe?g|gif|svg|webp)$/i'

      // Remove any original svg rules

      const vueSvgLoader = [
        {
          loader: 'vue-svg-loader',
          options: {
            svgo: false
          }
        }
      ]
      const imageMinPlugin = new ImageminPlugin({
        pngquant: {
          quality: '5-30',
          speed: 7,
          strip: true
        },
        jpegtran: {
          progressive: true

        },
        gifsicle: {
          interlaced: true
        },
        plugins: [
          imageminMozjpeg({
            quality: 70,
            // arithmetic: true,
            progressive: true
          })

        ]
      })
      if (!ctx.isDev) config.plugins.push(imageMinPlugin)

      config.module.rules.forEach(rule => {
        if (rule.test.toString() === ORIGINAL_TEST) {
          rule.test = /\.(png|jpe?g|gif|webp)$/i
          rule.use = [
            {
              loader: 'url-loader',
              options: {
                limit: 1000,
                name: ctx.isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]'
              }
            }
          ]
        }
      })
      //  Create the custom SVG rule
      const svgRule = {
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /inline/,
            use: vueSvgLoader
          },
          {
            resourceQuery: /data/,
            loader: 'url-loader'
          },
          {
            resourceQuery: /raw/,
            loader: 'raw-loader'
          },
          {
            loader: 'file-loader' // By default, always use file-loader
          }
        ]
      }

      config.module.rules.push(svgRule) // Actually add the rule
    },
    vendor: ['vue2-google-maps']
  }
}
