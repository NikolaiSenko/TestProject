module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    'react-hooks',
    'senko-plugin',
    'unused-imports'
  ],
  rules: {
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
      },
    ],
    semi: [2, 'never'],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: [
          'data-testid',
          'to',
          'name',
          'target',
          'justify',
          'align',
          'direction',
          'gap',
          'role',
          'as',
          'refName',
          'border',
        ],
      },
    ],
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-floating-promises': 0,
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    'react/display-name': 'off',
    'linebreak-style': 0,
    '@typescript-eslint/no-var-requires': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'senko-plugin/eslint-path-checker': ['error', { alias: '@' }],
    '@typescript-eslint/no-namespace': 'off',
    'senko-plugin/layer-import': [
      'error',
      {
        alias: '@',
        ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
      },
    ],
    'senko-plugin/public-api-imports': [
      'error',
      {
        alias: '@',
        testFilesPatterns: [
          '**/*.test.*',
          '**/*.story.*',
          '**/StoreDecorator.tsx',
        ],
      },
    ],
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}', '**/src/**/*.stories.tsx'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
}
