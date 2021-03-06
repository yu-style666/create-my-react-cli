module.exports = {
  <% if (isTypeScript) { %>
  setupFilesAfterEnv: ['<rootDir>src/setupTests.ts'],
  <% } else { %>
  setupFilesAfterEnv: ['<rootDir>src/setupTests.js'],
  <% } %>
  snapshotSerializers: ['enzyme-to-json/serializer'],
  <% if (isTypeScript) { %>
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testRegex: ['.*\\.test\\.jsx?$', '.*\\.test\\.tsx?$'],
  collectCoverageFrom: ['src/**/*.{js}', 'src/**/*.{ts}', 'src/**/*.{jsx}', 'src/**/*.{tsx}'],
  <% } else { %>
  moduleFileExtensions: ['js', 'jsx'],
  testRegex: ['.*\\.test\\.jsx?$'],
  collectCoverageFrom: ['src/**/*.{js}', 'src/**/*.{jsx}'],
  <% } %>
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|less|scss)$':
      'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    <% if (isTypeScript) { %>
    '^.+\\.tsx?$': 'ts-jest',
    <% } %>
    '^.+\\.jsx?$': 'babel-jest',
  },
};
