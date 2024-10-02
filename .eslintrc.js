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
        'react/jsx-uses-react': 0,
        'react/react-in-jsx-scope': 0,
        'react/prop-types': 0,
        'no-undef': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-explicit-any': 'warn',
        'react/display-name': 0,
        'react/no-unescaped-entities': 0,
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
