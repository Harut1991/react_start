module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  parser: 'babel-eslint',
  plugins: [
    'react'
  ],
  settings: {
    react: {
      version: '16.13.1'
    },
    propWrapperFunctions: [
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' }
    ],
    linkComponents: [
      'Hyperlink',
      { name: 'Link', linkAttribute: 'to' }
    ]
  },
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 'off',
    'no-plusplus': 'off',
    'no-async-promise-executor': ['error'],
    'no-await-in-loop': ['off'],
    'no-extra-parens': ['error', 'all', {
      ignoreJSX: 'all'
    }],
    'no-misleading-character-class': ['error'],
    'no-template-curly-in-string': ['error'],
    'no-underscore-dangle': ['error', {
      allow: [
        '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__',
        '_inputValidator',
        '_iterate',
        '_validator',
        '_onChange',
        '_onFocus',
        '_onBlur'
      ]
    }],
    "no-mixed-operators": 0,
    "import/no-extraneous-dependencies": 0,
    "react/jsx-props-no-spreading": 0,
    "import/no-unresolved": 0,
    'require-atomic-updates': ['error'],
    'accessor-pairs': ['error'],
    'class-methods-use-this': ['error'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'windows'],
    'comma-dangle': ['error', 'never'],
    'require-jsdoc': [2, {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: false,
        ClassDeclaration: false
      }
    }],
    'valid-jsdoc': ['warn'],
    'react/prefer-stateless-function': ['error'],
    'react/jsx-filename-extension': ['error', {
      extensions: ['.js', '.jsx']
    }],
    'import/prefer-default-export': 'off',
    'arrow-parens': 'off',
    'import/named': 0,
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'func-names': 'off',
    'no-confusing-arrow': 'off'
  },
  globals: {
    Generator: true,
    Iterator: true,
    Iterable: true,
    $Keys: true,
    $Shape: true
  }
};
