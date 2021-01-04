module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    "^.+\\.spec\\.ts$": "ts-jest"
  },
  collectCoverageFrom: ["./lib/**/*.ts"],
  testRegex: '(test/.*|(\\.|/)(test|spec))\\.(ts)?$',
  globals: {
    "ts-jest": {
      diagnostics: true
    }
  }
};