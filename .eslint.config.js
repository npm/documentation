import github from 'eslint-plugin-github'

export default [
  github.getFlatConfigs().react,
  {
    // This lets your .eslintrc.js handle most configuration
    ignores: ['.cache/**', 'public/**'],
  },
]
