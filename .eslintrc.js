module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier', 'vue-a11y', 'nuxt'],
  // add your custom rules here
  rules: {},
}
