// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "file:///Users/hosseinfouladi20gmail.com/programming/vue-portfolio/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/hosseinfouladi20gmail.com/programming/vue-portfolio/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///Users/hosseinfouladi20gmail.com/programming/vue-portfolio/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///Users/hosseinfouladi20gmail.com/programming/vue-portfolio/vite.config.ts";
var env = loadEnv("production", "");
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueJsx()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  base: env.VITE_ENV === "production" ? "/portfolio/" : "/"
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvaG9zc2VpbmZvdWxhZGkyMGdtYWlsLmNvbS9wcm9ncmFtbWluZy92dWUtcG9ydGZvbGlvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvaG9zc2VpbmZvdWxhZGkyMGdtYWlsLmNvbS9wcm9ncmFtbWluZy92dWUtcG9ydGZvbGlvL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9ob3NzZWluZm91bGFkaTIwZ21haWwuY29tL3Byb2dyYW1taW5nL3Z1ZS1wb3J0Zm9saW8vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcblxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnICxsb2FkRW52fSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXG5cbmNvbnN0IGVudj1sb2FkRW52KCdwcm9kdWN0aW9uJywnJylcblxuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIHZ1ZUpzeCgpLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgfVxuICB9LFxuICBiYXNlOmVudi5WSVRFX0VOVj09PSdwcm9kdWN0aW9uJz8nL3BvcnRmb2xpby8nOicvJyxcbiAgXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnVyxTQUFTLGVBQWUsV0FBVztBQUVuWSxTQUFTLGNBQWMsZUFBYztBQUNyQyxPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBSnlNLElBQU0sMkNBQTJDO0FBTTdRLElBQU0sTUFBSSxRQUFRLGNBQWEsRUFBRTtBQUlqQyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE1BQUssSUFBSSxhQUFXLGVBQWEsZ0JBQWM7QUFFakQsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K