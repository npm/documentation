module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  transform: {
    '^.+\\.jsx?$': `<rootDir>/jest-preprocess.js`,
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@primer/react|@primer/octicons-react|@primer/behaviors|@lit-labs|@lit|@github)/)',
  ],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
  },
}
