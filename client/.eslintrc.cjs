module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-airbnb-with-typescript',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    project: './tsconfig.json'
  },
  parser: '@typescript-eslint/parser',
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'class-methods-use-this': 'off',
    'one-var': 1,
    'eol-last': 0,
    'consistent-return': 0,
    'no-param-reassign': 0,
    'max-len': 0,
    'no-extra-boolean-cast': 0,
    'no-underscore-dangle': 0,
    'object-curly-newline': 0,
    'func-names': 0,
    camelcase: 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/no-named-as-default': 0,
    'import/no-import-module-exports': 0,

    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-this-alias': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/naming-convention': 0,

    // fix TS types
    'no-undef': 0,

    //
    // airbnb vue config
    'vue/max-len': 0,
    'vue/require-default-prop': 0,


    'jsx-a11y/heading-has-content': 0, // fix v-text
    'jsx-a11y/no-noninteractive-tabindex': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 0,
    'react/jsx-props-no-multi-spaces': 0,
    'react/button-has-type': 0,
  },
};
