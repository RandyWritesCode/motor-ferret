module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: ['plugin:prettier/recommended', 'react-app'],
    plugins: ['prettier', 'jsx', 'react'],
    rules: {
        'prettier/prettier': 'warn',
        'no-case-declarations': 0,
        'jsx/mark-used-vars': 1,
        'no-console': 0,
        quotes: ['warn', 'single'],
        semi: ['warn', 'always'],
    },
};
