import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import path from 'path'
import { viteSingleFile } from "vite-plugin-singlefile"

// https://github.com/richardtallent/vite-plugin-singlefile
// viteSingleFile(),


// https://blog.csdn.net/qq_38880700/article/details/123724675
export default defineConfig({
  base: "./", //等同于  assetsPublicPath :'./'
  plugins: [
    vue(),
    viteSingleFile(),
    Components({
      resolvers: [VantResolver(),],
    }),
  ],
  resolve: {
    alias: {
        "@": path.resolve(__dirname, "src"),
        "view": path.resolve(__dirname, "src/view"),
        "components": path.resolve(__dirname, "src/components"),
        "assets": path.resolve(__dirname, "src/assets"),
        "store": path.resolve(__dirname, "src/store"),
        "mixins": path.resolve(__dirname, "src/mixins"),
    },
  },
  
})
