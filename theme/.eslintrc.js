// eslint-disable-next-line filenames/match-regex
module.exports = {
  root: true,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    commonjs: true,
    es2022: true,
    browser: true,
  },
  extends: [
    '@npmcli',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:primer-react/recommended',
    'plugin:github/recommended',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  rules: {
    'max-len': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'eslint-comments/no-use': 'off',
    'no-shadow': 'off',
    'primer-react/no-system-props': ['warn', {includeUtilityComponents: true}],
    'import/no-commonjs': 'off',
    'no-console': 'off',
  },
  overrides: [
    {
      files: ['gatsby-node.js', 'gatsby-config.js'],
      env: {node: true, browser: false},
    },
    {
      files: ['test/*', './src/**/__tests__/*'],
      env: {jest: true},
    },
  ],
}
