const {getGlobals} = require('eslint-plugin-mdx/lib/helpers')

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
    'prettier',
  ],
  rules: {
    'max-len': 'off',
    'react/prop-types': 'off',
    'primer-react/no-system-props': ['error', {includeUtilityComponents: true}],
  },
  overrides: [
    {
      files: ['*.js'],
      extends: ['plugin:import/recommended'],
    },
    {
      files: ['src/shared.js'],
      rules: {
        'react/no-unescaped-entities': 'off',
      },
    },
    {
      files: ['*.mdx'],
      plugins: ['mdx', 'prettier'],
      extends: ['plugin:mdx/recommended'],
      parserOptions: {
        sourceType: 'module',
      },
      globals: getGlobals(['Index', 'Note', 'Prompt', 'PromptReply', 'Screenshot', 'Link', 'YouTube']),
      settings: {
        'import/resolver': 'webpack',
      },
      rules: {
        'no-irregular-whitespace': 'off',
        'jsx-a11y/anchor-has-content': 'off',
        'react/jsx-no-target-blank': 'off',
      },
    },
  ],
}
