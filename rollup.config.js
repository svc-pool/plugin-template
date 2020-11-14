import ts from "@wessberg/rollup-plugin-ts";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
// import importAlias from "rollup-plugin-import-alias";
import externalGlobals from "rollup-plugin-external-globals";

const plugins = [
  commonjs(),
  nodeResolve(),
  ts(),
  externalGlobals({
    react: "React",
    "react-dom": "ReactDOM",
  }),
];

function createEntry(input, file) {
  return {
    input,
    output: {
      format: "esm",
      sourcemap: true,
      file,
    },
    plugins,
  };
}

export default [createEntry("./plugins/MyPlugin.tsx", "./dist/MyPlugin.mjs")];
