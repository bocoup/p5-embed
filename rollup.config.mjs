import { babel } from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import cssbundle from "rollup-plugin-css-bundle";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/main.tsx",
  output: {
    inlineDynamicImports: true,
    file: "out/bundle.js",
    format: "es",
  },
  plugins: [typescript(), nodeResolve(), cssbundle(), terser()],
};
