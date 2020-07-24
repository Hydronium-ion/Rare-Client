const path = require('path');

module.exports = {
  preset: 'ts-jest',
  transform: {
    //   "^.+\\.tsx$": "babel-jest",
    '\\.(jpg|png)': '<rootDir>/fileTransformer.js'
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testRegex: '\\.test\\.tsx$',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/src/__mocks__/fileMock.ts',
    '^@/(.*)': '<rootDir>/src/$1',
    '^#/(.*)': '<rootDir>/src/components/$1',
    '^#Custom/(.*)': '<rootDir>/src/components/Custom/$1',
    '^#Icon/(.*)': '<rootDir>/src/components/Custom/Icon/$1',
    '^@Hooks/(.*)': '<rootDir>/src/hooks/$1',
    '^@Pages/(.*)': '<rootDir>/src/pages/$1',
    '^@Styles/(.*)': '<rootDir>/src/styles/$1',
    '^@Utils/(.*)': '<rootDir>/src/utils/$1'
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      babelConfig: require('./babel.config'),
      diagnostics: true
    }
  }
};
