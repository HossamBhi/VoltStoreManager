module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/setup-tests.js'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?|react-native-paper|react-native-vector-icons|@react-navigation/.*)/)',
  ],
  collectCoverage: true,
  moduleNameMapper: {
    axios: 'axios/dist/node/axios.cjs',
  },
  // transformIgnorePatterns: [
  //   'node_modules/(?!(@react-native' +
  //     '|react-native' +
  //     '|@react-navigation/.*' +
  //     '|react-native-vector-icons)/)',
  // ],
};
