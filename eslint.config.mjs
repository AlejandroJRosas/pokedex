import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import html from '@html-eslint/eslint-plugin';
import parser from '@html-eslint/parser';

export default [
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.html'],
    plugins: {
      '@html-eslint': html
    },
    languageOptions: {
      parser
    },
    rules: {
      '@html-eslint/no-duplicate-attrs': 'error',
      '@html-eslint/no-duplicate-id': 'error',
      '@html-eslint/no-inline-styles': 'warn',
      '@html-eslint/no-obsolete-tags': 'warn',
      '@html-eslint/no-script-style-type': 'error',
      '@html-eslint/no-target-blank': 'error',
      '@html-eslint/require-button-type': 'error',
      '@html-eslint/require-doctype': 'error',
      '@html-eslint/require-li-container': 'warn',
      '@html-eslint/require-meta-charset': 'error',
      '@html-eslint/require-lang': 'error',
      '@html-eslint/require-title': 'error',
      '@html-eslint/id-naming-convention': 'error',
      '@html-eslint/indent': ['warn', 'tab' | 2],
      '@html-eslint/lowercase': 'error',
      '@html-eslint/no-multiple-empty-lines': 'warn',
      '@html-eslint/no-trailing-spaces': 'warn'
    }
  }
];
