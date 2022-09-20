import { defineConfig } from 'rollup';

export default defineConfig({
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist/esm',
      format: 'esm',
    },
    {
      dir: 'dist/cjs',
      format: 'commonjs',
    },
  ],
});
