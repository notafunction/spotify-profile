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
    'plugin:vuejs-accessibility/recommended',
  ],
  plugins: ['prettier', 'nuxt', 'vuejs-accessibility'],
  // add your custom rules here
  rules: {},
}
