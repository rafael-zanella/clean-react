module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}'
  ],
  coverageDirectory: 'coverage',
  testEnvironoment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
