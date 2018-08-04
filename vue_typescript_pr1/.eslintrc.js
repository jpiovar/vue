module.exports = {
  "parser": "vue-eslint-parser",
  "parserOptions": {
      "parser": "typescript-eslint-parser",
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "extends": [
      // add more generic rulesets here, such as:
      'eslint:recommended',
      'plugin:vue/essential',
      "typescript",
      "airbnb-base"
  ],
  "plugins": [
      "typescript"
  ],
  "env": {
      "browser": true,
      "node": true,
      "es6": true
  },
  "rules": {
      "typescript/no-inferrable-types": "off",
      "no-undef": "off",
      "no-unused-vars": "off",
      "indent": "off",
      "import/prefer-default-export": 0,
      "comma-dangle": ["error", "never"],
      "no-param-reassign": ["error",  { "props": true, "ignorePropertyModificationsFor": ["state"] }],
      "import/no-unresolved": "off",
      "import/extensions": "off",
      "no-restricted-globals": "off",
      "space-infix-ops": "off",
      "max-len": "off",
      "typescript/type-annotation-spacing": "off",
      "class-methods-use-this": "off",
      "no-useless-escape": "off",
      "consistent-return": "off",
      "quote-props": "off",
      "typescript/explicit-member-accessibility": "off",
      "object-curly-newline": "off"
  }
};
