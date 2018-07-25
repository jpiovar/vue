module.exports = {
    testRegex: ".*spec\\.(js|ts)$",
    moduleFileExtensions: [
        'js',
        'json',
        'vue',
        'ts'
    ],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.ts?$': 'ts-jest',
        '.*\\.(vue)$': 'vue-jest'
    },
    testPathIgnorePatterns: [
        '<rootDir>/test/e2e'
    ],
    snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
    cacheDirectory: '<rootDir>/node_modules/.jest-snapshots/',
    // setupFiles: ['<rootDir>/test/unit/setup'],
    coverageDirectory: '<rootDir>/test/unit/coverage',
    collectCoverageFrom: [
        'src/**/*.{ts,vue}',
        '!src/main.ts',
        '!src/redirect.ts',
        '!src/**/*.d.ts',
        '!**/node_modules/**'
    ]
};
