const path = require('path')
import vue from '@vitejs/plugin-vue'

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue()],
  // alias: {
  //   '@': path.resolve(__dirname, 'src')
  // },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    optimizeDeps: {
      include: ['javascript-time-ago/locale/de']
    }
  },
  base: './'
}
