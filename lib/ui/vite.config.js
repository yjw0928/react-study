import { defineConfig } from 'vite'
import { resolve } from 'path'
const fs = require('fs')

// const entryDir = resolve(__dirname, `src`)
const outDir = resolve(__dirname, `lib`)

// const rootFilePaths = fs.readdirSync(resolve(entryDir))

// const rollupOptions = {
//     input: {
//         'index': resolve(entryDir, 'index.ts')
//     },
// }

// console.log(rootFilePaths)

// rootFilePaths.filter(path => path !== "index.ts").forEach((filePath) => {
//     const files = fs.readdirSync(resolve(entryDir, `${filePath}`))
//     files.forEach((file) => {
//         const fileName = file.replace(/\.ts$/g, '')
//         rollupOptions.input = {
//             ...rollupOptions.input,
//             // 打包生成的文件路径和文件名
//             [`${filePath}/${fileName}`]: resolve(entryDir, `${filePath}/${file}`),
//         }
//     })
// })



export default defineConfig({
    build: {
        outDir,
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            fileName: format => `${format}/[name].js`,
            formats: ['es'],
            name: 'yatool',
        },
        rollupOptions,
    }
})