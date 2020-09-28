module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    es2021: true
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArryBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {}
}
