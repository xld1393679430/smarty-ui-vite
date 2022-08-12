/// <reference types="vitest" />

import { defineConfig, Plugin } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "./config/unocss";

// https://vitejs.dev/config/

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({
  plugins: [
    vue(),
    // 添加JSX插件
    vueJsx() as Plugin,
    // 添加UnoCSS插件
    Unocss() as Plugin[],
  ],
  // 添加库模式配置
  build: {
    rollupOptions,
    minify: `terser`,
    // 输出单独sourcemap
    sourcemap: true,
    // 生成压缩大小报告
    // brotliSize: true,
    lib: {
      entry: "./src/entry.ts",
      name: "SmartyUI",
      fileName: "smarty-ui",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
    outDir: "./dist",
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: "happy-dom",
    transformMode: {
      web: [/.[tj]sx$/],
    },
    // ./src/__tests__ 是使用jest测试用例 故排除
    exclude: ["./src/__tests__"],
  },
});
