import typescript from '@rollup/plugin-typescript';    // 处理typescript
import babel from 'rollup-plugin-babel';              // 处理es6
import resolve from '@rollup/plugin-node-resolve';    // 你的包用到第三方npm包
import commonjs from '@rollup/plugin-commonjs';       // 你的包用到的第三方只有commonjs形式的包
import { terser } from 'rollup-plugin-terser';        // 压缩，可以判断模式，开发模式不加入到plugins
// import { eslint } from "rollup-plugin-eslint";
import pkg from './package.json';

// const env = process.env.NODE_ENV;

const config = {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main, // package.json 中 "main": "dist/index.cjs.js",
      format: 'cjs',  // commonjs 形式的包， require 导入
      sourcemap: false,
    },
    {
      file: pkg.module, // package.json 中 "module": "dist/index.esm.js"
      format: 'esm',  // es module 形式的包， 用来import 导入， 可以tree shaking
      sourcemap: false,
    },
    {
      file: pkg.umd,
      format: 'umd',  // umd 兼容形式的包， 可以直接应用于网页 script
      name: 'rz-methods'
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    typescript(),
    terser(),
  ]
};

export default config;