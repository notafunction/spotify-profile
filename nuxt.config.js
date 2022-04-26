const { BASE_URL = 'http://localhost:3001' } = process.env

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
  plugins: [
    '@/plugins/device.server.js',
    '@/plugins/axios.js',
    '@/plugins/vue-moment.js',
    '@/plugins/filters.js',
    '@/plugins/directives.js',
    '@/plugins/infinite-loading.client.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg-sprite',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-101192380-6',
      },
    ],
    [
      'vue-plausible',
      {
        domain: process.env.PLAUSIBLE_DOMAIN,
        apiHost: process.env.PLAUSIBLE_API_HOST,
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/pwa',
    [
      '@nuxtjs/sentry',
      {
        dsn: 'https://35bd9c26052649ffbb6199ef9e4d2872@o904613.ingest.sentry.io/6036390',
        tracing: true,
        publishRelease: {
          org: process.env.SENTRY_ORG_SLUG,
          project: process.env.SENTRY_PROJECT_NAME,
          authToken: process.env.SENTRY_AUTH_TOKEN,
        },
      },
    ],
    [
      'vue-toastification/nuxt',
      {
        timeout: 3000,
        draggable: false,
        position: 'bottom',
      },
    ],
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
        redirectUri: `${BASE_URL}/login`,
        codeChallengeMethod: 'S256',
        scope: [
          'user-read-private',
          'user-read-email',
          'user-read-recently-played',
          'user-top-read',
          'user-follow-read',
          'playlist-read-private',
          'playlist-read-collaborative',
          'playlist-modify-public',
          'playlist-modify-private',
        ],
        redirect: {
          login: '/login',
          callback: '/login',
          logout: '/login',
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
