import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'dist',
    'node_modules/**',
    'build',
    '.env',
    'out',
    'src/components/ui/**',
    'pnpm-lock.yaml',
    'package-lock.json',
    'yarn.lock',
  ]),
]);

export default eslintConfig;
