module.exports = {
  root: true,
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'
  ],
  plugins: ['react'],
  rules: {
    'no-unused-vars': ['warn', { 
      vars: 'all', 
      args: 'after-used', 
      ignoreRestSiblings: false,
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_'
    }],
    'react/prop-types': 'off',
    'react/no-unused-prop-types': 'warn'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}