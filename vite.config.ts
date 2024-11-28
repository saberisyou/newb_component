import { defineConfig } from "vite";
import { viteExternalsPlugin } from "vite-plugin-externals";

export default defineConfig({
  plugins: [
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
