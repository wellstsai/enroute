module.exports = {
  extends: [
    'airbnb'
  ],
  env: {
    browser: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/require-extension': [0],
    'import/no-extraneous-dependencies': ["error", { "devDependencies": true }],
    'jsx-a11y/no-static-element-interactions': 0,
    'import/prefer-default-export': 0,
    'no-console': 'error',
    'no-alert': 'error',
    'func-names': 'error',
    "ecmaFeatures": {
        "blockBindings": true
    },
    "class-methods-use-this": 0,
  },
};