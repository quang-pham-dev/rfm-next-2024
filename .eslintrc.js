module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: [
    'node_modules/*',
    'coverage/*',
    'html/assets/*',
    '*.config.ts',
    '*.stories.tsx',
    'dist',
  ],
  extends: [
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'simple-import-sort', 'unused-imports'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-explicit-any': 0,
        'react/display-name': 'off',
        'prettier/prettier': [
          'warn',
          {
            bracketSpacing: true,
            singleQuote: true,
            trailingComma: 'all',
            semi: false,
            printWidth: 80,
            tabWidth: 2,
            useTabs: false,
            endOfLine: 'auto',
          },
        ],
      },
    },
  ],
}
