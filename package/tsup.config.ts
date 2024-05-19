import { defineConfig } from 'tsup'
import stylePlugin from 'esbuild-style-plugin'

export default defineConfig({
  format: ['cjs', 'esm'],
  entry: ['./src/index.tsx'],
  dts: true,
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
  esbuildPlugins: [stylePlugin()],
})
