module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  overrides: [
    {
      files: [ '*.svelte' ],
      processor: 'svelte3/svelte3',
    },
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: [
    'svelte3',
  ],
  root: true,
  rules: {
    /** Enforce spacing within array brackets */
    'array-bracket-spacing': [
      'error',
      'always',
    ],

    /** Enforce commas after multiline object/array entries */
    'comma-dangle': [
      'error',
      'always-multiline',
    ],

    /** Disallow space before commas */
    'comma-spacing': 'error',

    /** Enforce placing multiline dots before the property instead of object */
    'dot-location': [
      'error',
      'property',
    ],

    /** Enforce using type-safe equality operators */
    'eqeqeq': [
      'error',
      'always',
    ],

    /** Disable import order rules in vue recommended style */
    'import/order': 'off',

    /** Disallow throwing alerts */
    'no-alert': 'error',

    /** Warn when using console logging */
    'no-console': 'warn',

    /** Disallow returning *awaited* values */
    'no-return-await': 'error',

    /** Disallow use of comma operator */
    'no-sequences': 'error',

    /** Disallow re-declaring variables in children scopes */
    'no-shadow': 'error',

    /** Disallow naming a variable as *undefined* */
    'no-undefined': 'error',

    /** Enforce import sorting */
    'sort-imports': [
      'error',
      { 'ignoreCase': true },
    ],

    /** Enforce object key sorting */
    'sort-keys': [
      'error',
      'asc',
      { 'caseSensitive': false },
    ],
  },
  settings: {},
}
