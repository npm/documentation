module.exports = {
  overrides: [{
    files: ['src/**'],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      sourceType: 'module',
    },
    env: {
      commonjs: true,
      es2022: true,
      browser: true,
      node: false,
    },
    rules: {
      'max-len': 'off',
      'import/no-extraneous-dependencies': 'off',
      'no-unused-vars': 'off',
    },
  }],
}
