module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    mocha: true, // for test files
    'truffle/globals': true, // same as "truffle/truffle": true
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'prettier'],
  plugins: ['truffle'],
  // add your custom rules here
  rules: {},
}
