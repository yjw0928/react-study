import { defineConfig } from "vite";
import { resolve } from "path";

const outDir = resolve(__dirname, `dist`);

export default defineConfig({
  build: {
    outDir,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      fileName: (format) => `yjwui.${format}.js`,
      formats: ["es"],
      name: "yjwui",
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["react"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: "React",
        },
      },
    },
  },
});
