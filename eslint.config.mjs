import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url))
});

export default [
  ...compat.extends('next/core-web-vitals'),
  { ignores: ['.next/**', 'node_modules/**', 'jsconfig.js'] },
  {
    rules: {
      'react-hooks/purity': 'off'
    }
  }
];
