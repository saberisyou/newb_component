import { defineConfig, loadEnv } from "vite";
import { viteExternalsPlugin } from "vite-plugin-externals";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  let plugins = [
    viteExternalsPlugin(
      {
        react: "React", // 映射react的全局变量为React
        "react-dom": "ReactDOM",
        "react-dom/client": "ReactDOM",
      },
      {
        disableInServe: true,
      }
    ),
  ];
  let build: any = {
    outDir: env.VITE_OUTPUT_DIR || "dist",
    lib: {
      entry: "./src/index.ts",
      name: "MyReactComponents",
      fileName: (format: string) => `my-react-components.${format}.js`,
      formats: ["es", "umd"], // 选择输出格式
    },
    rollupOptions: {
      external: ["react", "react-dom", "react-router-dom"],
    },
  };
  if (env.VITE_OUTPUT_DIR) {
    build = {
      outDir: env.VITE_OUTPUT_DIR || "dist",
    };
    plugins = [];
  }

  return {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    plugins,
    assetsInclude: ["**/*.woff", "**/*.woff2", "**/*.ttf", "**/*.otf"], // 确保 Vite 处理这些文件
    define: {
      "process.env": {}, // 将 process.env 定义为空对象
    },
    build,
  };
});
