module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react', 
    'react-hooks', 
    'import', 
    'jsx-a11y'
  ],
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    // General JavaScript Rules
    'no-unused-vars': ['warn', { 
      vars: 'all', 
      args: 'after-used', 
      ignoreRestSiblings: false 
    }],
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-duplicate-imports': 'error',

    // React Specific Rules
    'react/prop-types': 'off', // If using TypeScript or prop-types alternative
    'react/react-in-jsx-scope': 'off', // Not needed with new JSX transform
    'react/jsx-no-undef': 'error',
    'react/jsx-key': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/no-direct-mutation-state': 'error',
    
    // React Hooks Rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // Import Rules
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/order': ['warn', {
      'groups': [
        'builtin', 
        'external', 
        'internal', 
        'parent', 
        'sibling', 
        'index'
      ],
      'newlines-between': 'always'
    }],

    // Accessibility Rules
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/aria-role': 'warn',
    'jsx-a11y/no-redundant-roles': 'warn',

    // Performance and Best Practices
    'react/jsx-no-bind': ['warn', {
      'ignoreRefs': true,
      'allowArrowFunctions': true,
      'allowFunctions': false,
      'allowBind': false
    }],
    'react/self-closing-comp': ['error', {
      'component': true,
      'html': true
    }]
  },
  overrides: [
    {
      // Server-side Node.js specific rules
      files: ['server/**/*.js'],
      env: {
        node: true,
        es6: true
      },
      rules: {
        'no-console': 'off'
      }
    },
    {
      // Client-side React specific rules
      files: ['client/src/**/*.{js,jsx}'],
      env: {
        browser: true
      },
      rules: {
        'react/jsx-filename-extension': ['warn', { 
          extensions: ['.js', '.jsx'] 
        }]
      }
    }
  ]
};