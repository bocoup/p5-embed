import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import cssbundle from "rollup-plugin-css-bundle";

export default {
  input: "src/main.js",
  output: {
    inlineDynamicImports: true,
    file: "out/bundle.js",
    format: "es",
  },
  plugins: [nodeResolve(), commonjs(), cssbundle(), terser()],
};
