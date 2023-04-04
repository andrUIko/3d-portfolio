const { defineConfig } = require('vite')
const pluginReact = require('@vitejs/plugin-react')

// https://vitejs.dev/config/
module.exports = defineConfig({
    plugins: [
        pluginReact()
    ],
})
