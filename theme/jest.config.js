module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ['<rootDir>/setup-tests.js'],
  transform: {
    "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
  },
}

