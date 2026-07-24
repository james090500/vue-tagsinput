import { defineConfig, globalIgnores } from 'eslint/config'
import pluginVue from 'eslint-plugin-vue'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default defineConfig([
    ...pluginVue.configs['flat/strongly-recommended'],
    {
        rules: {
            'prefer-const': [
                'error',
                {
                    destructuring: 'any',
                    ignoreReadBeforeAssign: false,
                },
            ],
        },
    },
    globalIgnores(['.wranger/*', 'dist/*', 'node_modules/*']),
    eslintPluginPrettierRecommended,
])
