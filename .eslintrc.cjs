/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    env: { node: true },
    extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', '@vue/eslint-config-prettier/skip-formatting'],
    parserOptions: { ecmaVersion: 'latest' },
    overrides: [
        {
            files: ['*.html', '*.vue'],
            processor: 'vue/.vue',
        },
    ],
    rules: {
        'quotes': ['error', 'single'],
        'no-console': [
            'error',
            {
                allow: ['warn', 'error'],
            },
        ],
        'no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
            },
        ],
        'vue/attribute-hyphenation': ['warn', 'never'],
        'vue/v-on-event-hyphenation': [
            'error',
            'never',
            {
                autofix: true,
            },
        ],
    },
}
