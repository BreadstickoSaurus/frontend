import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        VitePWA({
            includeAssets: [
                '**/*.{png,woff2,ico,svg}'
            ],
            registerType: 'autoUpdate',
            manifest: {
                name: "Collection App",
                short_name: "CollectionApp",
                icons: [
                    {
                        src: "/pwa-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                        purpose: "any"
                    },
                    {
                        src: "/pwa-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "any"
                    },
                    {
                        src: "/pwa-maskable-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                        purpose: "maskable"
                    },
                    {
                        src: "/pwa-maskable-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "maskable"
                    }
                ],
                start_url: "/",
                display: "standalone",
                background_color: "#FFFFFF",
                theme_color: "#FFFFFF",
                description: "An app to keep track of and share your game collection"
            },
            workbox: {
                runtimeCaching: [
                    {
                        urlPattern: ({url}) => {
                            return url.pathname.startsWith("/api");
                        },
                        handler: "StaleWhileRevalidate",
                        options: {
                            cacheName: "api-cache",
                            cacheableResponse: {
                                statuses: [0, 200]
                            }
                        }
                    },
                    {
                        urlPattern: ({url}) => {
                            return url.pathname.startsWith("/uploads");
                        },
                        handler: "CacheFirst",
                        options: {
                            cacheName: "image-cache",
                            cacheableResponse: {
                                statuses: [0, 200]
                            }
                        }
                    }
                ]
            }
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
