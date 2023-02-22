import typescript from "@rollup/plugin-typescript";
// import pkg from './package.json'

export default {
  input: "src/main.ts",
  output: {
    // file: pkg.main,
    // name: pkg.name,
    file: './dist/index.js',
    // name: pkg.name,
    format: "esm",
  },
  plugins: [typescript()],
};
