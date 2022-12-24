module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential"],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": "off",
    "no-unused-vars": "off",
  },
};
