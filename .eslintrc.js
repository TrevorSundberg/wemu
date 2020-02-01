module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    "eslint:all",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    "indent": "off",
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-extra-parens": "off",
    "@typescript-eslint/no-extra-parens": ["error"],
    "@typescript-eslint/explicit-member-accessibility": ["error"],

    "max-statements": ["error", 100],
    "max-lines-per-function": ["error", 200],
    "max-len": ["error", 120],
    "padded-blocks": ["error", "never"],
    "object-property-newline": "off",
    "object-curly-newline": ["error", { "multiline": true, "consistent": true }],
    "multiline-ternary": "off",
    "function-call-argument-newline": ["error", "consistent"],

    "no-console": "off",
    "no-process-env": "off",

    "quote-props": ["error", "consistent-as-needed"],
    "one-var": "off",
    "no-ternary": "off",
    "no-confusing-arrow": "off",
    "no-await-in-loop": "off",
    "no-magic-numbers": "off",
    "no-new": "off",
    "require-await": "off",
    "class-methods-use-this": "off",
    "@typescript-eslint/camelcase": "off",
    "global-require": "off",
    "callback-return": "off",
    "no-plusplus": "off",
    "max-params": ["error", 6],
    "no-sync": "off",

    "default-case": "off",
    "no-undef": "off",
    "max-classes-per-file": "off",
    "prefer-named-capture-group": "off",
    "require-atomic-updates": "off",
    "no-bitwise": "off",
    "no-mixed-operators": "off",
    "id-length": "off",
    "no-process-exit": "off"
  },
};