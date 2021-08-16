module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    // 'prettier/prettier': 'error',
    // semi: ['error', 'never', { beforeStatementContinuationChars: 'never' }],
  }
}
