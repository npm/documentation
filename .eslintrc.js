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
  settings: {
    import: {
      ignore: ['^theme$'],
    },
  },
  rules: {
    'react/prop-types': 'off',
    // our theme use exports which dont work with import/no-unresolved
    'import/no-unresolved': ['error', {ignore: ['^theme$']}],
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
