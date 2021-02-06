const { resolve } = require('path')
const root = resolve(__dirname)

module.exports = {
  rootDir: root,
  displayName: 'unit-tests',
  testEnvironment: 'node',
  collectCoverageFrom: ['<rootDir>/**/*.ts', '!<rootDir>/**/*.d.ts'],
  coverageDirectory: 'coverage/',
  coverageProvider: 'v8',
  clearMocks: true,
  preset: '@shelf/jest-mongodb',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1'
  }
}
