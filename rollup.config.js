import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const env = process.env.NODE_ENV

const config = {
  input: 'src/index.ts',
  output: {
    file: env === 'development' ? './dist/umd/index.js' : './dist/umd/index.min.js',
    format: 'umd',
    name: 'rz-methods'
  },
  // external: Object.keys(pkg.peerDependencies || {}),
  plugins: [
    commonjs(),
    nodeResolve({
      jsnext: true
    }),
    typescript({
      tsconfig: './tsconfig.esm.rollup.json'
    })
  ]
}

if (env === 'production') {
  config.plugins.push(
    terser({
      output: {
        ascii_only: true // 仅输出ascii字符
      },
      compress: {
        pure_funcs: ['console.log'],
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  )
}

export default config