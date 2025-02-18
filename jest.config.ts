import nextJest from "next/jest";

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
  coverageDirectory: "coverage",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  // testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",
  testEnvironment: "jsdom",
  // setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};

export default createJestConfig(customJestConfig);
