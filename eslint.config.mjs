// Here we will define all the linting rules for the project

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      // Strict import correctness (like flake8)
      "import/no-unresolved": "error",
      "import/no-duplicates": "error",
      "import/order": "off", // we disable default import-order
      "no-unused-vars": "error",

      // Your import sorting plugin
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error"
    }
  },

  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

