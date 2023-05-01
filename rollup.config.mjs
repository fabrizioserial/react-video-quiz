import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import scss from "rollup-plugin-scss";
import postcss from 'rollup-plugin-postcss';

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: "dist/cjs/index.js",
                format: "cjs",
                sourceMap: true,
            },
            {
                file: 'dist/esm/index.js',
                format: "esm",
                sourceMap: true,
            },
        ],
        plugins: [
            resolve({extensions}),
            commonjs(),
            typescript({tsconfig: "./tsconfig.json"}),
            postcss({
                extract: false,
                modules: false,
                use: ['sass'],
                plugins:[],
                extensions: ['.scss', '.css'],
            }),
        ],
        external: ["react", "react-dom"],
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{file: "dist/index.d.ts", format: "esm"}],
        plugins: [dts()],
        external: [/\.(css|less|scss)$/],
    },
];
