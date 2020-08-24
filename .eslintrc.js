module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    semi: 0,
    'no-console': 0,
    'class-methods-use-this': 0,
    'arrow-parens': 0,
    'import/first': 0,
  },
};
