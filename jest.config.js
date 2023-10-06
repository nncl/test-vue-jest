module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\js$': ['babel-jest'],
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.svg$': 'jest-transform-stub'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$',
  moduleFileExtensions: ['vue', 'js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  coveragePathIgnorePatterns: ['/node_modules/', '/tests/'],
  coverageReporters: ['text', 'json-summary'],
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons']
  }
}
