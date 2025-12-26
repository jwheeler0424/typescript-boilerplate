import { defineConfig, globalIgnores } from "eslint/config";
import importPlugin from "eslint-plugin-import";
import tsdoc from "eslint-plugin-tsdoc"; // <--- ADD THIS LINE
import tseslint from "typescript-eslint";

export default defineConfig([
  ...tseslint.configs.recommended,
  {
    plugins: {
      import: importPlugin,
      tsdoc: tsdoc, // <--- REGISTER HERE
    },
    rules: {
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^(?:_|...)",
          varsIgnorePattern: "^(?:_|...)",
          caughtErrorsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "sort-imports": [
        "error",
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
          allowSeparatedGroups: true,
        },
      ],
      "import/no-named-as-default-member": "off",
      "import/namespace": "off",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["sibling", "parent"],
            "index",
            "unknown",
          ],
          pathGroups: [
            { pattern: "react", group: "builtin", position: "before" },
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          pathGroupsExcludedImportTypes: ["react"],
        },
      ],
      "tsdoc/syntax": "error",
    },
  },
  globalIgnores([
    "out/**",
    "build/**",
    "node_modules/**",
    "coverage/**",
    "static/**",
    "__tests__/**",
  ]),
]);
