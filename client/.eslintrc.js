// .eslintrc.js in client directory
module.exports = {
  root: true,
  extends: [
    'react-app',
    'react-app/jest'
  ],
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    // Customize rules as needed
    'react/jsx-no-undef': 'error',
    'no-unused-vars': 'warn',
    
    // Additional recommended rules
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off'
  }
};