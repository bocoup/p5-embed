import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import cssbundle from "rollup-plugin-css-bundle";
import typescript from "@rollup/plugin-typescript";
import sizes from "rollup-plugin-sizes";

export default {
  input: "src/main.tsx",
  output: {
    inlineDynamicImports: true,
    file: "out/bundle.js",
    format: "es",
    compact: true,
  },
  plugins: [typescript(), nodeResolve(), cssbundle(), terser(), sizes()],
};
