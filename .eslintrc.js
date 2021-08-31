module.exports = {
  "env": {
    "commonjs": true,
    "es2021": true,
    "node": true,
    "cypress/globals": true,
    "jasmine": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 12
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "windows"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ]
  },
  "plugins": [
    "cypress"
  ]
};
