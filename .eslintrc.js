module.exports = {
  root: true,
  ignorePatterns: ['cli/', '.cache/', 'public/'],
  extends: [
    'react-app',
    'react-app/jest',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:github/react',
    'plugin:primer-react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'prettier',
  ],
  rules: {
    'react/prop-types': 'off',
  },
  overrides: [
    // {
    //   files: ['**/src/**/*.js'],
    //   // env: {
    //   //   commonjs: false,
    //   //   browser: true,
    //   // },
    //   // parserOptions: {
    //   //   sourceType: 'module',
    //   // },
    // },
    // {
    //   files: ['**/gatsby-*.js'],
    //   // env: {node: true},
    // },
    // {
    //   files: ['**/test/*', '**/__tests__/*'],
    //   env: {jest: true},
    // },
    {
      files: ['src/shared.js'],
      rules: {
        'react/no-unescaped-entities': 'off',
      },
    },
  ],
}
