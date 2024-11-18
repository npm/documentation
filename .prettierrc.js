const config = require('@github/prettier-config')

module.exports = {
  ...config,
  proseWrap: 'never',
  embeddedLanguageFormatting: 'off',
  overrides: [
    {
      files: ['content/**/*.mdx'],
      printWidth: 99999,
    },
  ],
}
