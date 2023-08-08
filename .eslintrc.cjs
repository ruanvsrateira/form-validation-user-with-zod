module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react-hooks/recommended", "eslint-config-prettier", "prettier", "plugin:storybook/recommended"],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'eslint-plugin-import-helpers'],
  rules: {
    "@typescript-eslint/no-unused-vars": ["error"],
    "semi": ["error", "always"],
    "quotes": ["error", "single"],
    "indent": ["error", 2, {
      "SwitchCase": 1
    }],
    "space-in-parens": ["error", "never"],
    "object-curly-spacing": [2, "always"],
    "import-helpers/order-imports": ["warn", {
      "newlinesBetween": "always",
      "groups": [["/^react/"], ["module"], ["/^~//"], ["parent", "sibling", "index"]],
      "alphabetize": {
        "order": "asc",
        "ignoreCase": true
      }
    }],
    'react-refresh/only-export-components': ['warn', {
      allowConstantExport: true
    }]
  }
};