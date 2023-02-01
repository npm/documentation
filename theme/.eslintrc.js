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
    'plugin:import/recommended',
    'plugin:import/react',
    'plugin:promise'
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx'
        ]
      }
    }
  },
  rules: {
    'max-len': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'eslint-comments/no-use': 'off',
    'no-shadow': 'off',
    'primer-react/no-system-props': ['warn', { includeUtilityComponents: true }],
  },
  overrides: [
    {
      files: ['gatsby-node.js', 'gatsby-config.js'],
      env: { node: true, browser: false },
    },
    {
      files: ['test/*', './src/**/__tests__/*'],
      env: { jest: true },
    },
  ],
}
