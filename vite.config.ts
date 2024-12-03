import { defineConfig } from "vite";
import { viteExternalsPlugin } from "vite-plugin-externals";
import Font from 'vite-plugin-font'

export default defineConfig({
  resolve: {
    alias:{
      '@':'/src'
    }
  },
  plugins: [
    // reactRefresh(),
    Font.vite(),
    viteExternalsPlugin(
      {
        react: "React", // 映射react的全局变量为React
        "react-dom": "ReactDOM",
        "react-dom/client": "ReactDOM",
      },
      {
        disableInServe: true,
      },
    ),
  ],
  assetsInclude: ['**/*.woff', '**/*.woff2', '**/*.ttf', '**/*.otf'], // 确保 Vite 处理这些文件
  define: {
    'process.env': {}, // 将 process.env 定义为空对象
  },
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "MyReactComponents",
      fileName: (format) => `my-react-components.${format}.js`,
      formats: ["es", "umd"], // 选择输出格式
    },
    rollupOptions: {
      external: ["react", "react-dom", "react-router-dom"],
    },
  },
});
