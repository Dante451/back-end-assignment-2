module.exports = {
    rootDir: "./test", // Set the root directory to point to the test folder
    transform: {
      "^.+\\.tsx?$": "ts-jest", // If you’re using TypeScript
    },
    testEnvironment: "node", // Set the environment to Node.js
    testMatch: [
      "**/?(*.)+(spec|test).[t]s?(x)", // Matches files with .test.ts or .spec.ts extensions
    ],
    moduleFileExtensions: ["ts", "tsx", "js", "json"], // Ensure Jest can handle TypeScript files
    setupFilesAfterEnv: ["./setupTests.js"], // If you have any setup file for tests
  };
  