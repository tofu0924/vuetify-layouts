module.exports = {
  extends: [
    'plugin:vue/recommended'
  ],
  plugins: [
    'vuetify'
  ],
  rules: {
    'vuetify/no-deprecated-classes':'error',
    'vuetify/no-legacy-grid':'error',
    'vue/multi-word-component-names': ['error', {
      'ignores':["Buttons", "Forms","Icons","Tables"]}],
    'indent': ['error', 2]
  }
}
