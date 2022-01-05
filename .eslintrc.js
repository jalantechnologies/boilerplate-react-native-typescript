module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:@typescript-eslint/recommended'],
  rules: {
    semi: [2, 'never'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'prettier/prettier': 0,
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': 1,
  },
  ignorePatterns: ['storybook/*'],
}
