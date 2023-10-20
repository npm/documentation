module.exports = {
  root: true,
  ignorePatterns: ['.cache/', 'public/'],
  extends: [
    '@npmcli',
    'react-app',
    // 'react-app/jest',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:github/react',
    'plugin:primer-react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'prettier',
  ],
  rules: {
    'max-len': 'off',
    'react/prop-types': 'off',
    'primer-react/no-system-props': ['error', {includeUtilityComponents: true}],
  },
  overrides: [
    {
      files: ['src/shared.js'],
      rules: {
        'react/no-unescaped-entities': 'off',
      },
    },
  ],
}
