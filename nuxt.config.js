
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // titleTemplate: '%s - asso_equi-libre',
    title: 'Association Equi-Libre',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/gmap.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    ['nuxt-mail', {
      message: {
        to: 'jeyson.agutte0801@gmail.com'
      },
      smtp: {
        // service: 'gmail',
        // auth: {
        //   user: 'jeysnator@gmail.com',
        //   pass: 'rlgaddbyfjlesumc'
        // }
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
          user: '49657d183f20d4',
          pass: '2d032df9ae6a8d'
        }
        // host: 'mail.mylittleworkben.ch',
        // port: 587,
        // auth: {
        //   user: 'test@mylittleworkben.ch',
        //   pass: 'jaimelabite69'
        // }
      },
      json: {
        limit: '5mb'
      }
    }
    ]
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  axios: {
  }
}
