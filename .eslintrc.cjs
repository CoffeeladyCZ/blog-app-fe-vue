module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
  },
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'i18next/languages': ['en', 'cz']
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': 2020,
  },
  'rules': {
    // Basic settings
    'indent':               ['warn', 2],
    'no-trailing-spaces':   ['warn'],

    // Code settings
    'no-var':               ['warn'],
    'prefer-const':         ['warn', { 'ignoreReadBeforeAssign': true }],
    'no-return-assign':     ['error', 'always'],
  },
};
