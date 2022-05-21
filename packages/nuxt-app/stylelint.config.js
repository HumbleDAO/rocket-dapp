module.exports = {
  customSyntax: 'postcss-html',
  plugins: ['stylelint-scss'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-prettier',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'color-function-notation': 'off',
    'rule-empty-line-before': 'off',
    'color-hex-length': false,
    'comment-empty-line-before': false,
  },
}
