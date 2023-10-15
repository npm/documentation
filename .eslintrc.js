module.exports = {
  root: true,
  ignorePatterns: ['cli/', '.cache/', 'public/'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:github/react',
    'plugin:primer-react/recommended',
    'plugin:react-hooks/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['src/**'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      env: {
        commonjs: true,
        es2022: true,
        browser: true,
        node: false,
      },
      rules: {
        'max-len': 'off',
      },
    },
    {
      files: ['src/shared.js'],
      rules: {
        'react/no-unescaped-entities': 'off',
      },
    },
  ],
}
