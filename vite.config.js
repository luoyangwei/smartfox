import {resolve} from 'path'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {quasar, transformAssetUrls} from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
                template: {transformAssetUrls}
            }
        ),

        // @quasar/plugin-vite options list:
        // https://github.com/quasarframework/quasar/blob/dev/vite-plugin/index.d.ts
        quasar({
            utoImportComponentCase: 'combined',
            sassVariables: 'src/styles/quasar.variables.sass'
        })],

    css: {
        preprocessorOptions: {
            sass: {}
        }
    },

    resolve: {
        alias: {
            alias: [
                {
                    find: "@", replacement: resolve(__dirname, "./src")
                },
                {
                    find: "", replacement: resolve(__dirname, "./src")
                }
            ]

        }
    }, base: "/"
})
