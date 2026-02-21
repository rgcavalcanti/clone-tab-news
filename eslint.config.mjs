import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import prettier from "eslint-config-prettier/flat";
import js from "@eslint/js";
import jest from "eslint-plugin-jest";

const eslintConfig = defineConfig([
  ...nextVitals,
  prettier,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    files: ["**/*.js"],
    plugins: {
      js,
    },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.test.js"],
    ...jest.configs["flat/recommended"],
  },
]);

export default eslintConfig;
