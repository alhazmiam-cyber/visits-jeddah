import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        id: '/',
        name: 'زيارات السلامة والجودة',
        short_name: 'زيارات السلامة',
        description: 'تسجيل زيارات التدقيق الميداني للسلامة والجودة مع الصور والموقع الجغرافي',
        lang: 'ar',
        dir: 'rtl',
        theme_color: '#0f4c81',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        icons: [
          {
            src: 'icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512-maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        // لا نخزّن صور المرفقات مؤقتًا ضمن ذاكرة التخزين المؤقت للتطبيق
        navigateFallbackDenylist: [/^\/api\//],
      },
    }),
  ],
})
