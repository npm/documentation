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
    'plugin:github/react',
    'plugin:primer-react/recommended',
    'prettier',
    'plugin:react-hooks/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'max-len': 'off',
    'react/prop-types': 'off',
    // TODO: migrate primer/react components to sx instead of deprecated system props
    'primer-react/no-system-props': ['warn', {includeUtilityComponents: true}],
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
