export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'spotify-profile',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  publicRuntimeConfig: {
    spotifyApiUrl: 'https://api.spotify.com/v1',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/transitions.scss', '@/assets/scss/fonts.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/vue-moment.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg-sprite',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  auth: {
    strategies: {
      spotify: {
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://accounts.spotify.com/authorize',
          token: 'https://accounts.spotify.com/api/token',
          userInfo: 'https://api.spotify.com/v1/me',
        },
        responseType: 'code',
        grantType: 'authorization_code',
        clientId: 'c7e00945c07e4e23bcfb50648430ee40',
        redirectUri: '/login',
        codeChallengeMethod: 'S256',
        scope: [
          'user-read-private',
          'user-read-email',
          'user-read-recently-played',
          'user-top-read',
          'user-follow-read',
          'user-follow-modify',
          'playlist-read-private',
          'playlist-read-collaborative',
          'playlist-modify-public',
        ],
        redirect: {
          login: '/login',
          callback: `${process.env.BASE_URL}/login`,
          logout: '/',
          home: '/',
        },
      },
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  svgSprite: {
    input: '~/assets/icons/',
  },
}
