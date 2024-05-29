module.exports = {
    'env': {
        'browser': true,
        'vue/setup-compiler-macros': true,
    },
    'plugins': ['import', '@stylistic/ts'],
    'extends': [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        '@vue/eslint-config-typescript/recommended',
        'plugin:storybook/recommended',
    ],
    'rules': {
        '@stylistic/ts/comma-dangle': ['warn', 'always-multiline'],
        '@stylistic/ts/member-delimiter-style': 'warn',
        '@stylistic/ts/space-infix-ops': ['warn', { 'int32Hint': false }],
        '@typescript-eslint/indent': ['warn', 4],
        '@typescript-eslint/no-unused-vars': ['warn', {
            'varsIgnorePattern': '^_',
            'argsIgnorePattern': '^_',
        }],
        'import/order': ['warn', {
            // 'type' is omitted so type imports are adjacent to regular imports within their group
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
            alphabetize: {
                order: 'asc',
                // `import type` lines are ordered below `import`
                orderImportKind: 'desc',
            },
            'newlines-between': 'never',
        }],
        'no-multiple-empty-lines': ['warn', { 'max': 1, 'maxEOF': 0 }],
        'object-curly-spacing': ['warn', 'always'],
        'quotes': ['warn', 'single'],
        'semi': ['warn', 'always'],
        'sort-imports': ['warn', {
            // Set to true so import/order can do its job
            ignoreDeclarationSort: true,
        }],
        'vue/block-order': ['warn', {
            'order': ['script', 'template', 'style'],
        }],
        'vue/html-indent': ['warn', 4],
        'vue/multi-word-component-names': 'off',
        'vue/script-indent': ['warn', 4],
    },
};
