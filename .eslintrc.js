// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:prettier/recommended',
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'max-len': ['error', { code: 120 }],
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': 'off',
    'no-undef': 'off',
    'react/button-has-type': 'off',
    'no-case-declarations': 'off',
    'no-return-await': 'off',
    camelcase: 'off',
    quotes: [2, 'single', { avoidEscape: true }],
    'global-require': 'off',
    'object-curly-spacing': ['error', 'always'],
    'object-curly-newline': [
      'error',
      {
        ExportDeclaration: { multiline: true, minProperties: 3 },
      },
    ],
  },
};
