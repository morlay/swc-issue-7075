import {transform} from "@swc/core";

void transform(`
const A = String(1)
`, {
    swcrc: false,
    jsc: {
        parser: {
            syntax: "typescript",
            tsx: true,
            dynamicImport: true
        },
        target: "es2022",
        transform: {
            react: {
                runtime: "automatic"
            }
        },
        externalHelpers: false,
        experimental: {
            plugins: [
                ["@innoai-tech/swc-plugin-annotate-pure-calls", {}],
            ]
        }
    }
}).then((ret) => console.log(ret.code))
